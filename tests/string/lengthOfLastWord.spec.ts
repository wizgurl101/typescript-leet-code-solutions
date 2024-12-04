import { expect } from 'chai';
import 'mocha';
import { LenghtOfLastWord } from '../../src/string/theLengthOfLastWord';

describe.skip('the length of the last word ', () => {
  it('should return 5 if input is "Hello World"', () => {
    const result = LenghtOfLastWord('Hello World');
    expect(result).to.equal(5);
  });

  it('should return 6 if input is "luffy is still joyboy"', () => {
    const result = LenghtOfLastWord('luffy is still joyboy');
    expect(result).to.equal(6);
  });
});
