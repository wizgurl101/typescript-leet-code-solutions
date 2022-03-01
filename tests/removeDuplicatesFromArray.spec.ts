import { strict as assert } from "assert";
import "mocha";
import { removeDuplicatesFromUnsortedArray } from "../src/removeDuplicatesFromArray";

describe.skip("remove duplicates from array solution tests", () => {
  describe("remove duplicates from unsorted string array", () => {
    let testInput = [
      "abc1234",
      "asbdg2345",
      "hggo2345nm",
      "asbdg2345",
      "asbdg2345",
      "abc1234",
      "hggo2345nm",
      "2334kksjsa",
      "abc1234",
      "hggo2345nm",
    ];

    it("should return the expected array", () => {
      let expected = ["abc1234", "asbdg2345", "hggo2345nm", "2334kksjsa"];

      const result = removeDuplicatesFromUnsortedArray(testInput);
      assert.deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    });
  });
});
