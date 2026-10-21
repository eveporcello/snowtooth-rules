import type { Status } from "@/lib/snowtooth";

const labels: Record<Status, string> = {
  OPEN: "Open",
  CLOSED: "Closed",
  HOLD: "On hold",
};

export function StatusBadge({ status }: { status: Status }) {
  return <span className={`badge badge-${status.toLowerCase()}`}>{labels[status]}</span>;
}
