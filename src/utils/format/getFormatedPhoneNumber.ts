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

export function parsePhoneNumber(phoneNumber: string): string {
  // 숫자만 추출
  let digitsOnly = phoneNumber.replace(/\D/g, "");

  // 한국 국가 코드 (+82) 제거
  if (digitsOnly.startsWith("82")) {
    digitsOnly = digitsOnly.substring(2);
  }

  // 첫 번째 숫자가 0이 아니면 0을 추가
  if (!digitsOnly.startsWith("0")) {
    digitsOnly = "0" + digitsOnly;
  }

  return digitsOnly;
}
