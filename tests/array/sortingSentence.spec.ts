import { expect } from "chai";
import "mocha";
import { sortSentence } from "../../src/array/sortingSentence";

describe.skip("binary search solution tests", () => {
  it("should return 'This is a sentence'", () => {
    let result = sortSentence("is2 sentence4 This1 a3");
    expect(result).to.equal("This is a sentence");
  });
});
