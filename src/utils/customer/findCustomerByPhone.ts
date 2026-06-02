import type { customer } from "@prisma/client";
import prisma from "../../lib/prisma";
import normalizePhoneDigits, {
  phoneLookupVariants,
} from "../format/normalizePhoneDigits";

export async function findCustomerByPhone(
  phone: string
): Promise<customer | null> {
  const normalizedPhone = normalizePhoneDigits(phone);
  if (!normalizedPhone) return null;

  const variants = phoneLookupVariants(normalizedPhone);
  const byExact = await prisma.customer.findFirst({
    where: { phone: { in: variants } },
    orderBy: { id: "desc" },
  });
  if (byExact) return byExact;

  const suffix = normalizedPhone.slice(-8);
  if (suffix.length < 8) return null;

  const candidates = await prisma.customer.findMany({
    where: { phone: { contains: suffix } },
    orderBy: { id: "desc" },
    take: 10,
  });

  return (
    candidates.find(
      (candidate) =>
        candidate.phone &&
        normalizePhoneDigits(candidate.phone) === normalizedPhone
    ) ?? null
  );
}
