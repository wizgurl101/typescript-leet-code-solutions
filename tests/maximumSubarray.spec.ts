import { expect } from "chai";
import "mocha";
import { maxSubArray } from "../src/MaximumSubarray/maximumSubarray";

describe.skip("maximum subarray solution 1", () => {
  it("should return 6 if input is [-2,1,-3,4,-1,2,1,-5,4]", () => {
    let result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(result).to.equal(6);
  });

  it("should return 1 if input is [1]", () => {
    let result = maxSubArray([1]);
    expect(result).to.equal(1);
  });

  it("should return 23 if input is [5,4,-1,7,8]", () => {
    let result = maxSubArray([5, 4, -1, 7, 8]);
    expect(result).to.equal(23);
  });
});
