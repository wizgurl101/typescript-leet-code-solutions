import { expect } from "chai";
import "mocha";
import { scoreOfAString } from "../../src/string/ascii";

describe.skip("ASCII String solution tests", () => {
  it("Given a When getting the score of a Then the score is 97", () => {
    const result = scoreOfAString("a");
    expect(result).to.equal(97);
  });

  it("Given ab When getting the score of ab Then the score is 1", () => {
    const result = scoreOfAString("ab");
    expect(result).to.equal(1);
  });

  it("Given hello When getting the score of hello Then the score is 1", () => {
    const result = scoreOfAString("hello");
    expect(result).to.equal(13);
  });
});
