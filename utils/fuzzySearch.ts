/**
 * Computes Levenshtein Distance between two strings for fuzzy matching.
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  const lenA = a.length;
  const lenB = b.length;

  if (lenA === 0) return lenB;
  if (lenB === 0) return lenA;

  for (let i = 0; i <= lenA; i++) matrix[i] = [i];
  for (let j = 0; j <= lenB; j++) matrix[0][j] = j;

  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[lenA][lenB];
}

export interface SearchableStructure {
  id: string;
  name: string;
  latinName?: string;
  description?: string;
  functions?: string[];
  diseases?: string[];
}

export interface FuzzySearchResult<T> {
  item: T;
  score: number;
  matchType: 'exact' | 'prefix' | 'substring' | 'fuzzy' | 'content';
}

/**
 * Performs fuzzy search on brain structures array.
 */
export function fuzzySearchStructures<T extends SearchableStructure>(
  structures: T[],
  query: string
): FuzzySearchResult<T>[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: FuzzySearchResult<T>[] = [];

  for (const struct of structures) {
    const name = struct.name.toLowerCase();
    const latin = (struct.latinName || '').toLowerCase();
    const desc = (struct.description || '').toLowerCase();
    const functions = (struct.functions || []).join(' ').toLowerCase();
    const diseases = (struct.diseases || []).join(' ').toLowerCase();

    let score = 0;
    let matchType: 'exact' | 'prefix' | 'substring' | 'fuzzy' | 'content' = 'substring';

    if (name === q || latin === q || struct.id === q) {
      score = 100;
      matchType = 'exact';
    } else if (name.startsWith(q) || latin.startsWith(q)) {
      score = 85;
      matchType = 'prefix';
    } else if (name.includes(q) || latin.includes(q)) {
      score = 70;
      matchType = 'substring';
    } else if (desc.includes(q) || functions.includes(q) || diseases.includes(q)) {
      score = 50;
      matchType = 'content';
    } else {
      // Levenshtein fuzzy edit distance matching for typos (e.g. "hipocampus" -> "hippocampus")
      const words = name.split(' ');
      let minWordDist = 99;
      for (const word of words) {
        const dist = levenshteinDistance(q, word);
        if (dist < minWordDist) minWordDist = dist;
      }

      const distLatin = latin ? levenshteinDistance(q, latin) : 99;
      const minDist = Math.min(minWordDist, distLatin);

      if (minDist <= 3 && q.length >= 3) {
        score = Math.max(15, 45 - minDist * 10);
        matchType = 'fuzzy';
      }
    }

    if (score > 0) {
      results.push({ item: struct, score, matchType });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
