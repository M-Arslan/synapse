export function generateMockVector(dim = 1536): number[] {
  const vector = Array.from({ length: dim }, () => Math.random());
  const norm = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  return vector.map((val) => val / norm);
}