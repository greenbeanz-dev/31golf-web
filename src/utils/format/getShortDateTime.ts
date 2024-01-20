// from "YYYY-mm-dd" to "YY-mm-dd"

export default function getShortDateTime(date: Date): string {
  const year = date.getFullYear().toString().slice(2);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}
