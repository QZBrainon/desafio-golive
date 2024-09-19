export function convertToISOString(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  console.log(date);
  return date.toISOString();
}
