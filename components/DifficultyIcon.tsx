import type { Trail } from "@/lib/snowtooth";

const symbols: Record<Trail["difficulty"], { icon: string; color: string; label: string }> = {
  beginner: { icon: "●", color: "#1a7f37", label: "Green circle" },
  intermediate: { icon: "■", color: "#1d4ed8", label: "Blue square" },
  advanced: { icon: "◆", color: "#111827", label: "Black diamond" },
  expert: { icon: "◆◆", color: "#111827", label: "Double black diamond" },
};

export function DifficultyIcon({ difficulty }: { difficulty: Trail["difficulty"] }) {
  const { icon, color, label } = symbols[difficulty];
  return (
    <span role="img" aria-label={label} title={label} style={{ color }}>
      {icon}
    </span>
  );
}
