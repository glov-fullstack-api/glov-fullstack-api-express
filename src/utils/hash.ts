export const simpleHasher = (num: number) => {
  if (num < 100 || num > 999) {
    throw new Error("Number must be in the range 100 to 999 inclusive");
  }

  return (num % 10) + 1;
};
