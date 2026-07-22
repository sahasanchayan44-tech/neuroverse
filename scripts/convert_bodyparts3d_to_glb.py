import urllib.request
import os
import json
import struct
import math

# BodyParts3D dataset files mapped to NeuroVerse anatomical structure IDs
STRUCTURE_MAPPING = {
  'amygdala': ['amygdala_FJ1753.obj', 'amygdala_FJ1829.obj'],
  'angular_gyrus': ['angular_gyrus_FJ1732.obj', 'angular_gyrus_FJ1733.obj'],
  'cerebellum': ['cerebellum_FJ1781.obj', 'cerebellum_FJ1830.obj'],
  'corpus_callosum': ['corpus_callosum_FJ1742.obj'],
  'hippocampus': ['hippocampus_FJ1759.obj', 'hippocampus_FJ1807.obj'],
  'hypothalamus': ['hypothalamus_FJ1760.obj', 'hypothalamus_FJ1808.obj'],
  'frontal_lobe': [
    'inferior_frontal_gyrus_FJ1744.obj', 'inferior_frontal_gyrus_FJ1745.obj',
    'middle_frontal_gyrus_FJ1787.obj', 'middle_frontal_gyrus_FJ1788.obj',
    'precentral_gyrus_FJ1800.obj', 'precentral_gyrus_FJ1801.obj',
    'superior_frontal_gyrus_FJ1833.obj', 'superior_frontal_gyrus_FJ1834.obj'
  ],
  'temporal_lobe': [
    'inferior_temporal_gyrus_FJ1746.obj', 'inferior_temporal_gyrus_FJ1747.obj',
    'middle_temporal_gyrus_FJ1789.obj', 'middle_temporal_gyrus_FJ1790.obj',
    'fusiform_gyrus_FJ1783.obj', 'fusiform_gyrus_FJ1784.obj',
    'parahippocampal_gyrus_FJ1785.obj', 'parahippocampal_gyrus_FJ1786.obj'
  ],
  'parietal_lobe': [
    'postcentral_gyrus_FJ1797.obj', 'postcentral_gyrus_FJ1798.obj',
    'supramarginal_gyrus_FJ1841.obj', 'supramarginal_gyrus_FJ1842.obj',
    'cingulate_gyrus_FJ1739.obj', 'cingulate_gyrus_FJ1740.obj',
    'insula_FJ1748.obj', 'insula_FJ1749.obj'
  ],
  'occipital_lobe': ['occipital_lobe_FJ1791.obj', 'occipital_lobe_FJ1792.obj'],
  'medulla': ['medulla_oblongata_FJ1769.obj', 'medulla_oblongata_FJ1831.obj'],
  'brain_stem': ['midbrain_FJ1770.obj', 'midbrain_FJ1817.obj'],
  'pons': ['pons_FJ1775.obj', 'pons_FJ1822.obj'],
  'thalamus': ['thalamus_FJ1782.obj', 'thalamus_FJ1827.obj']
}

BASE_URL = "https://raw.githubusercontent.com/isotopyofloops/brain-atlas/main/brain_obj/"

def parse_obj(obj_text):
  vertices = []
  normals = []
  faces = []

  for line in obj_text.splitlines():
    line = line.strip()
    if not line or line.startswith('#'):
      continue
    parts = line.split()
    if parts[0] == 'v':
      # Scale and center BodyParts3D coordinates into Three.js world space
      vx = float(parts[1]) * 0.05
      vy = float(parts[2]) * 0.05
      vz = float(parts[3]) * 0.05
      vertices.append((vx, vy, vz))
    elif parts[0] == 'f':
      # Parse face indices (1-based index)
      idx_list = []
      for p in parts[1:]:
        idx_list.append(int(p.split('/')[0]) - 1)
      if len(idx_list) >= 3:
        # Triangulate polygon if face has >3 vertices
        for i in range(1, len(idx_list) - 1):
          faces.append((idx_list[0], idx_list[i], idx_list[i + 1]))

  return vertices, faces

def download_and_build():
  print("Downloading BodyParts3D open anatomical dataset...")
  os.makedirs("public/models", exist_ok=True)

  structured_meshes = {}

  for struct_id, files in STRUCTURE_MAPPING.items():
    print(f"Processing anatomical structure: {struct_id}...")
    combined_vertices = []
    combined_faces = []

    for filename in files:
      url = BASE_URL + filename
      try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
          obj_text = resp.read().decode('utf-8')
          verts, faces = parse_obj(obj_text)

          v_offset = len(combined_vertices)
          combined_vertices.extend(verts)
          for f in faces:
            combined_faces.append((f[0] + v_offset, f[1] + v_offset, f[2] + v_offset))
      except Exception as e:
        print(f"Warning: Failed to fetch {filename}: {e}")

    if combined_vertices and combined_faces:
      structured_meshes[struct_id] = (combined_vertices, combined_faces)

  print(f"Successfully compiled {len(structured_meshes)} anatomical multi-mesh structures!")

  # Build Binary glTF (GLB) file structure
  bin_buffer = bytearray()
  accessors = []
  buffer_views = []
  nodes = []
  meshes = []

  node_indices = []

  for struct_id, (verts, faces) in structured_meshes.items():
    # 1. Vertex Data (Float32 Vec3)
    vert_bytes = bytearray()
    min_x = min_y = min_z = float('inf')
    max_x = max_y = max_z = float('-inf')

    for v in verts:
      min_x, max_x = min(min_x, v[0]), max(max_x, v[0])
      min_y, max_y = min(min_y, v[1]), max(max_y, v[1])
      min_z, max_z = min(min_z, v[2]), max(max_z, v[2])
      vert_bytes.extend(struct.pack('<fff', v[0], v[1], v[2]))

    vert_bv_idx = len(buffer_views)
    vert_offset = len(bin_buffer)
    bin_buffer.extend(vert_bytes)
    # 4-byte alignment
    while len(bin_buffer) % 4 != 0:
      bin_buffer.append(0)

    buffer_views.append({
      "buffer": 0,
      "byteOffset": vert_offset,
      "byteLength": len(vert_bytes),
      "target": 34962 # ARRAY_BUFFER
    })

    vert_acc_idx = len(accessors)
    accessors.append({
      "bufferView": vert_bv_idx,
      "byteOffset": 0,
      "componentType": 5126, # FLOAT
      "count": len(verts),
      "type": "VEC3",
      "min": [min_x, min_y, min_z],
      "max": [max_x, max_y, max_z]
    })

    # 2. Index Data (Uint32 Vec1)
    face_bytes = bytearray()
    for f in faces:
      face_bytes.extend(struct.pack('<III', f[0], f[1], f[2]))

    face_bv_idx = len(buffer_views)
    face_offset = len(bin_buffer)
    bin_buffer.extend(face_bytes)
    while len(bin_buffer) % 4 != 0:
      bin_buffer.append(0)

    buffer_views.append({
      "buffer": 0,
      "byteOffset": face_offset,
      "byteLength": len(face_bytes),
      "target": 34963 # ELEMENT_ARRAY_BUFFER
    })

    face_acc_idx = len(accessors)
    accessors.append({
      "bufferView": face_bv_idx,
      "byteOffset": 0,
      "componentType": 5125, # UNSIGNED_INT
      "count": len(faces) * 3,
      "type": "SCALAR"
    })

    # 3. Mesh & Node Definition
    mesh_idx = len(meshes)
    meshes.append({
      "name": f"mesh_{struct_id}",
      "primitives": [{
        "attributes": { "POSITION": vert_acc_idx },
        "indices": face_acc_idx
      }]
    })

    node_idx = len(nodes)
    nodes.append({
      "name": struct_id,
      "mesh": mesh_idx
    })
    node_indices.append(node_idx)

  gltf_json = {
    "asset": { "version": "2.0", "generator": "NeuroVerse BodyParts3D Converter" },
    "scene": 0,
    "scenes": [{ "nodes": node_indices }],
    "nodes": nodes,
    "meshes": meshes,
    "accessors": accessors,
    "bufferViews": buffer_views,
    "buffers": [{ "byteLength": len(bin_buffer) }]
  }

  json_str = json.dumps(gltf_json, separators=(',', ':'))
  json_bytes = json_str.encode('utf-8')
  while len(json_bytes) % 4 != 0:
    json_bytes += b' '

  # GLB Header
  magic = 0x46546C67 # 'glTF'
  version = 2
  total_length = 12 + 8 + len(json_bytes) + 8 + len(bin_buffer)

  glb = bytearray()
  glb.extend(struct.pack('<III', magic, version, total_length))

  # JSON Chunk
  glb.extend(struct.pack('<II', len(json_bytes), 0x4E4F534A)) # 'JSON'
  glb.extend(json_bytes)

  # BIN Chunk
  glb.extend(struct.pack('<II', len(bin_buffer), 0x004E4942)) # 'BIN'
  glb.extend(bin_buffer)

  out_path = "public/models/brain.glb"
  with open(out_path, "wb") as f:
    f.write(glb)

  print(f"✅ Medically accurate multi-mesh GLB model saved to {out_path} ({len(glb) / 1024 / 1024:.2f} MB)")

if __name__ == '__main__':
  download_and_build()
