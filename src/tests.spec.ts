import { calculator } from "./calculator";
import { testGenerator } from "./testGenerator";

describe("tests for calculator function", () => {
  //   it("2 + 3 should be 5", () => {
  //     const conditions = ["2", "+", "3"];
  //     const result = calculator(conditions);
  //     expect(result).toBe(5);
  //   });

  //   it("2 + 2 * 2 should be 6", () => {
  //     const conditions = ["2", "+", "3", "*", "2"];
  //     const result = calculator(conditions);
  //     expect(result).toBe(8);
  //   });

  it("2 + 3 * 2 - 4 / 2 + 10 should be 18", () => {
    const conditions = ["2", "+", "3", "*", "2", "-", "4", "/", "2", "+", "10"];
    const result = calculator(conditions);
    expect(result).toBe(0);
  });

  // it("test generator", () => {
  //   const result = testGenerator(7);
  //   expect(result).toBe(6);
  // });
});
