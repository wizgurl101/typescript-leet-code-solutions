import { expect } from "chai";
import "mocha";
import { search } from "../src/binarySearch";

describe.skip("binary search solution tests", () => {
  it("should return 4", () => {
    let result = search([-1, 0, 3, 5, 9, 12], 9);
    expect(result).to.equal(4);
  });

  it("should return -1", () => {
    let result = search([-1, 0, 3, 5, 9, 12], 2);
    expect(result).to.equal(-1);
  });

  it("should return 1", () => {
    let result = search([-1, 0, 3, 5, 9, 12], 0);
    expect(result).to.equal(1);
  });
});
