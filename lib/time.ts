// Every time a guest sees is Mountain Time, no matter where their phone thinks it is.
export function formatMountainTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "2-digit",
  });
}
