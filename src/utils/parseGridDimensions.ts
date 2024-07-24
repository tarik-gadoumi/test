export const parseGridDimensions = (line: string): [number, number] => {
  const maxX = parseInt(line[0]);
  const maxY = parseInt(line[1]);
  return [maxX, maxY];
};
