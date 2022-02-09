import { expect } from "chai";
import "mocha";
import { twoSum } from "../src/twoSum";

describe.skip("two sum solution tests", () => {
  it("should return [0, 1]", () => {
    let result = twoSum([2, 7, 11, 15], 9);
    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal(1);
  });

  it("should return [1, 2]", () => {
    let result = twoSum([3, 2, 4], 6);
    expect(result[0]).to.equal(1);
    expect(result[1]).to.equal(2);
  });

  it("should return [3, 3]", () => {
    let result = twoSum([3, 3], 6);

    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal(1);
  });
});
