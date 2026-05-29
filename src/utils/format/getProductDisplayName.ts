export function getProductDisplayName(
  name?: string | null,
  type?: string | null
): string {
  return [name, type].filter(Boolean).join(" ");
}
