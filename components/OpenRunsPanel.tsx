import { useEffect, useState } from "react";
import { getTrails, type Trail } from "@/lib/snowtooth";
import { StatusBadge } from "@/components/StatusBadge";

export function OpenRunsPanel() {
  const [trails, setTrails] = useState<Trail[] | null>(null);

  useEffect(() => {
    getTrails().then(setTrails);
  }, []);

  if (!trails) return <section className="panel">Loading runs...</section>;

  const open = trails.filter((trail) => trail.status === "OPEN");

  return (
    <section className="panel">
      <h2>Open Runs ({open.length})</h2>
      <ul>
        {open.map((trail) => (
          <li key={trail.id}>
            <span>{trail.name}</span>
            <StatusBadge status={trail.status} />
          </li>
        ))}
      </ul>
    </section>
  );
}
