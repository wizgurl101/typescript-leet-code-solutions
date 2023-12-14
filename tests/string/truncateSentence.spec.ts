import { expect } from "chai";
import "mocha";
import { truncateSentence } from "../../src/string/truncateSentence";

describe.skip("truncate sentence solution tests", () => {
  it("Given the string 'Hello how are you Contestant When truncate to 4 words Then 'Hello how are you' is return'", () => {
    let result = truncateSentence("Hello how are you Contestant", 4);
    expect(result).to.equal("Hello how are you");
  });
});
