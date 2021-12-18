import { expect } from "chai";
import { validParenthese } from "../src/validParentheses/validParenthese";
import "mocha";

describe("valid parenthese solution tests", () => {
  it("should return true if input given is ()", () => {
    let result = validParenthese("()");
    expect(result).to.equal(true);
  });

  it("should return true if input given is ()[]{}", () => {
    let result = validParenthese("()[]{}");
    expect(result).to.equal(true);
  });

  it("should return false if input given is (]", () => {
    let result = validParenthese("(]");
    expect(result).to.equal(false);
  });

  it("should return false if input given is ([)]", () => {
    let result = validParenthese("([])]");
    expect(result).to.equal(false);
  });

  it("should return true if input given is {()}", () => {
    let result = validParenthese("{()}");
    expect(result).to.equal(true);
  });

  it("should return false if input given is {", () => {
    let result = validParenthese("{");
    expect(result).to.equal(false);
  });
});
