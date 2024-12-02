import { expect } from 'chai';
import 'mocha';
import { LenghtOfLastWord } from '../../src/string/theLengthOfLastWord';

describe('the length of the last word ', () => {
  it('should return 5 if input is "Hello World"', () => {
    const result = LenghtOfLastWord('Hello World');
    expect(result).to.equal(5);
  });
});
