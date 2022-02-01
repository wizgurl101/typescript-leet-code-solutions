import { expect } from "chai";
import "mocha";
import { findRelativeRanks } from "../../src/relativeRanks";

describe("relative ranks solution tests", () => {
  it('should return ["Gold Medal","Silver Medal","Bronze Medal","4","5"] if input is [5,4,3,2,1]', () => {
    let result = findRelativeRanks([5, 4, 3, 2, 1]);

    expect(result[0]).to.equal("Gold Medal");
    expect(result[1]).to.equal("Silver Medal");
    expect(result[2]).to.equal("Bronze Medal");
    expect(result[3]).to.equal("4");
    expect(result[4]).to.equal("5");
  });

  it('should return ["Gold Medal","5","Bronze Medal","Silver Medal","4"] if input is [10,3,8,9,4]', () => {
    let result = findRelativeRanks([10, 3, 8, 9, 4]);

    expect(result[0]).to.equal("Gold Medal");
    expect(result[1]).to.equal("5");
    expect(result[2]).to.equal("Bronze Medal");
    expect(result[3]).to.equal("Silver Medal");
    expect(result[4]).to.equal("4");
  });
});
