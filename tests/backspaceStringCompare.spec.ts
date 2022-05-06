import {expect} from 'chai'
import "mocha"
import { backspaceCompare } from '../src/backspace_string_compare'

describe.skip("backspace string compare solution tests", () => {
    it('should return true if input is "ab#c" and "ad#c"', () => {
        const result = backspaceCompare("ab#c", "ad#c")
        expect(result).to.be.true
    })

    it('should return true if input is "ab##" and "c#d#"', () => {
        const result = backspaceCompare("ab##", "c#d#")
        expect(result).to.be.true
    })

    it('should return true if input is "a#c" and "b"', () => {
        const result = backspaceCompare("a#c", "b")
        expect(result).to.be.false
    })
})