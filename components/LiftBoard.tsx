import { useEffect, useState } from "react";

type Lift = {
  id: string;
  name: string;
  status: string;
  capacity: number;
};

export function LiftBoard() {
  const [lifts, setLifts] = useState<Lift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://snowtooth-api-rest.fly.dev/lifts")
      .then((res) => res.json())
      .then((data) => {
        setLifts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <section className="panel">Loading lifts...</section>;

  return (
    <section className="panel">
      <h2>Lifts</h2>
      <ul>
        {lifts.map((lift) => (
          <li key={lift.id}>
            <span>{lift.name}</span>
            <span
              style={{
                color: lift.status === "OPEN" ? "#1a7f37" : "#b42318",
                fontWeight: 600,
              }}
            >
              {lift.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
