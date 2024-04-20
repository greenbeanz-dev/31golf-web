export default function getShortPhoneNumber(phoneNumber?: string) {
  if (phoneNumber && phoneNumber.length > 4)
    return `(${phoneNumber.slice(-4)})`;
  else "";
}
