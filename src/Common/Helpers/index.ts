export function formatDate(date: string): string {
  const newDate = new Date(date);

  const longMonth = newDate.toLocaleString("en-us", { month: "long" });
  const day = newDate.getUTCDate();
  const year = newDate.getUTCFullYear();
  const time = newDate.toLocaleTimeString("en-US");

  return `${longMonth} ${day}, ${year} ${time}`;
}
