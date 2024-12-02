import { greet } from "./greet";

describe("greet function", () => {
  it("should return a greeting with the given name", () => {
    const result = greet("John");
    expect(result).toEqual("Hello, John!");
  });
});
