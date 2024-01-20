export function getFormatedPhoneNumber(
  phoneNumber: string | undefined | null
): string {
  if (!phoneNumber) return "";
  // Remove any non-digit characters from the input
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  // Format the phone number as per the specified pattern
  const formattedNumber = digitsOnly.replace(
    /(\d{3})(\d{4})(\d{4})/,
    "$1-$2-$3"
  );

  return formattedNumber;
}
