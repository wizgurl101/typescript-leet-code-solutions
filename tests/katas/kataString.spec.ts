import { expect } from 'chai';
import 'mocha';
import { sumTheStrings } from '../../src/katas/string_katas';

describe('kataString solution tests', () => {
  describe('sum the string function', () => {
    it('should return 9', () => {
      let result = sumTheStrings('4', '5');
      expect(result).to.equal('9');
    });

    it('should return 39', () => {
      let result = sumTheStrings('34', '5');
      expect(result).to.equal('39');
    });

    it('should return 0', () => {
      let result = sumTheStrings('', '');
      expect(result).to.equal('0');
    });
  });
});
