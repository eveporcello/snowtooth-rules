import { useEffect, useState } from "react";
import { getTrails, type Trail } from "@/lib/snowtooth";
import { DifficultyIcon } from "@/components/DifficultyIcon";

export function RunsPanel() {
  const [trails, setTrails] = useState<Trail[] | null>(null);

  useEffect(() => {
    getTrails().then(setTrails);
  }, []);

  if (!trails) return <section className="panel">Loading runs...</section>;

  return (
    <section className="panel">
      <h2>All Runs</h2>
      <ul>
        {trails.map((trail) => (
          <li key={trail.id}>
            <span>{trail.name}</span>
            <DifficultyIcon difficulty={trail.difficulty} />
          </li>
        ))}
      </ul>
    </section>
  );
}
