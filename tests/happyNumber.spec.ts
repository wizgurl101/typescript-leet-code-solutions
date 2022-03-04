import { expect } from "chai";
import "mocha";
import {isHappy} from '../src/happyNumber'

describe.skip("happy number solution tests", () => {
  it("should return false", () => {
    let result = isHappy(2);
    expect(result).to.equal(false);
  });

    it("should return true", () => {
    let result = isHappy(19);
    expect(result).to.equal(true);
  });
});
