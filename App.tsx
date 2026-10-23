import { LiftBoard } from "@/components/LiftBoard";
import { OpenRunsPanel } from "@/components/OpenRunsPanel";
import { RunsPanel } from "@/components/RunsPanel";

export default function App() {
  return (
    <main>
      <h1>Snowtooth Mountain</h1>
      <div className="grid">
        <LiftBoard />
        <OpenRunsPanel />
        <RunsPanel />
      </div>
    </main>
  );
}
