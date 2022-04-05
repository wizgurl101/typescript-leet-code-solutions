import { expect } from 'chai';
import 'mocha';
import { countBits } from '../../src/dynamic_programming/countingBits';

describe.skip('counting bits solution tests', () => {
  it('should return [0,1,1,2,1,2]', () => {
    let result = countBits(5);
    let expected = [0, 1, 1, 2, 1, 2];

    // deep equality with chai
    expect(result).to.eql(expected);
  });

  it('should return [0,1,1]', () => {
    let result = countBits(2);
    let expected = [0, 1, 1];

    // deep equality with chai
    expect(result).to.eql(expected);
  });
});
