export function convertToISOString(dateString: string) {
  try {
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toISOString();
  } catch (error) {
    return "";
  }
}
