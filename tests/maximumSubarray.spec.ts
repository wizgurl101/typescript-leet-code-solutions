import { expect } from "chai";
import "mocha";
import { maxSubArraySolution1 } from "../src/MaximumSubarray/maximumSubarray";

describe("maximum subarray solution 1", () => {
  it("should return 6 if input is [-2,1,-3,4,-1,2,1,-5,4]", () => {
    let result = maxSubArraySolution1([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(result).to.equal(6);
  });

  it("should return 1 if input is [1]", () => {
    let result = maxSubArraySolution1([1]);
    expect(result).to.equal(1);
  });

  it("should return 23 if input is [5,4,-1,7,8]", () => {
    let result = maxSubArraySolution1([5, 4, -1, 7, 8]);
    expect(result).to.equal(23);
  });
});
