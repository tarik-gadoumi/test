type Direction = "N" | "E" | "S" | "W";
const directions: Direction[] = ["N", "E", "S", "W"];

export const parseInitialPosition = (
  line: string
): [number, number, Direction] | null => {
  if (line.length !== 4) return null;

  const initialX = parseInt(line[0]);
  const initialY = parseInt(line[1]);
  const direction = line[3] as Direction;

  if (!isNaN(initialX) && !isNaN(initialY) && directions.includes(direction)) {
    return [initialX, initialY, direction];
  }
  return null;
};
