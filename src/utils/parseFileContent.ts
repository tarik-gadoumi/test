export const parseFileContent = (data: string): string[] => {
  return data
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
};
