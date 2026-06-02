export default function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function phoneLookupVariants(digits: string): string[] {
  if (!digits) return [];

  const variants = new Set<string>([digits]);

  if (digits.length === 11) {
    variants.add(
      `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
    );
  } else if (digits.length === 10) {
    if (digits.startsWith("02")) {
      variants.add(
        `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`
      );
    } else {
      variants.add(
        `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
      );
    }
  }

  return Array.from(variants);
}
