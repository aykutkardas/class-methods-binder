import { greeting } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = greeting();
    expect(result).to.equal("Hello World!");
  });
});
