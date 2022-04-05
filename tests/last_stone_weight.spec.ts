import { expect } from 'chai';
import 'mocha';
import { lastStoneWeight } from '../src/last_stone_weight';

describe.skip('last stone weight solution', () => {
  it('should return 1', () => {
    const result = lastStoneWeight([2, 7, 4, 1, 8, 1]);
    expect(result).to.equal(1);
  });

  it('should return 1', () => {
    const result = lastStoneWeight([1]);
    expect(result).to.equal(1);
  });
});
