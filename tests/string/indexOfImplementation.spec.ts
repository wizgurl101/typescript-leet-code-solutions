import { expect } from 'chai';
import 'mocha';
import { indexOfImplementation } from '../../src/string/indexOfImplementation';

describe('index of implementatio solution', () => {
  it('Given a strng sadbutsad When given sad Then the index of sad return is 0', () => {
    const result = indexOfImplementation('sadbutsad', 'sad');
    expect(result).to.equal(0);
  });

  it('Given a strng leetcode When given leeto Then the index of leeto return is -1', () => {
    const result = indexOfImplementation('leetcode', 'leeto');
    expect(result).to.equal(-1);
  });
});
