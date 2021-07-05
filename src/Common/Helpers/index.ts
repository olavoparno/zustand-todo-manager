export function formatDate(date: string): string {
  const newDate = new Date(date);

  const longMonth = newDate.toLocaleString("en-us", { month: "long" });
  const day = newDate.getUTCDate();
  const year = newDate.getUTCFullYear();
  const time = newDate.toLocaleTimeString("en-US");

  return `${longMonth} ${day}, ${year} ${time}`;
}

export function generateUuid(): string {
  return "00-0-4-1-000".replace(/[^-]/g, (s) =>
    // eslint-disable-next-line no-bitwise
    (((Math.random() + ~~s) * 0x10000) >> +s).toString(16).padStart(4, "0")
  );
}
