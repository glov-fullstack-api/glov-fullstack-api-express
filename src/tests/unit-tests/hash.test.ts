import { simpleHasher } from "../../utils/hash";

describe("simpleHasher", () => {
  it("should return (num % 10) + 1 for valid numbers in the range 100 to 999", () => {
    expect(simpleHasher(100)).toBe(1);
    expect(simpleHasher(105)).toBe(6);
    expect(simpleHasher(999)).toBe(10);
  });

  it("should throw an error if the number is less than 100", () => {
    expect(() => simpleHasher(99)).toThrow(
      "Number must be in the range 100 to 999 inclusive"
    );
    expect(() => simpleHasher(0)).toThrow(
      "Number must be in the range 100 to 999 inclusive"
    );
  });

  it("should throw an error if the number is greater than 999", () => {
    expect(() => simpleHasher(1000)).toThrow(
      "Number must be in the range 100 to 999 inclusive"
    );
    expect(() => simpleHasher(1500)).toThrow(
      "Number must be in the range 100 to 999 inclusive"
    );
  });

  it("should not throw an error if the number is in the range 100 to 999", () => {
    expect(() => simpleHasher(100)).not.toThrow();
    expect(() => simpleHasher(999)).not.toThrow();
  });
});
