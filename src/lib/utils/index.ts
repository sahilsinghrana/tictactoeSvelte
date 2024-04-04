type TplayerLabel = "X" | "O" | "-";

export const getPlayerLabel = (player: number): TplayerLabel => {
  if (player === 1) return "O";
  if (player === 0) return "X";
  return "-";
};
