export function parseProductInclusives(
  inclusives: string | null | undefined
): string[] {
  if (!inclusives?.trim()) return [];
  return inclusives
    .split(",")
    .map((item) => item.split("_@_")[0]?.trim())
    .filter((item): item is string => Boolean(item));
}

export function collectInclusiveOptions(
  products: { inclusives?: string | null }[]
): string[] {
  const labels = new Set<string>();
  products.forEach((product) => {
    parseProductInclusives(product.inclusives).forEach((label) => {
      labels.add(label);
    });
  });
  return Array.from(labels).sort((a, b) => a.localeCompare(b, "ko-KR"));
}

export function productHasAllInclusives(
  inclusives: string | null | undefined,
  selected: string[]
): boolean {
  if (selected.length === 0) return true;
  const productLabels = parseProductInclusives(inclusives);
  return selected.every((label) => productLabels.includes(label));
}
