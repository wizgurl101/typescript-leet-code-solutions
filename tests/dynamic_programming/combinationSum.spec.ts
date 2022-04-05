import { expect } from 'chai';
import 'mocha';
import { combinationSum } from '../../src/dynamic_programming/combinationSum';

describe.skip('combination sum solution tests', () => {
    it('should return [[2,2,3],[7]]', () => {
        const result = combinationSum([2,3,6,7], 7)
        const expected = [[2,2,3],[7]]
        expect(result).to.eql(expected);
    })

    it('should return [[2,2,2,2],[2,3,3],[3,5]]', () => {
        const result = combinationSum([2,3,5], 8)
        const expected = [[2,2,2,2],[2,3,3],[3,5]]
        expect(result).to.eql(expected);
    })

    it('should return []', () => {
        const result = combinationSum([2], 1)
        const expected:any = [];
        expect(result).to.eql(expected);
    })
})