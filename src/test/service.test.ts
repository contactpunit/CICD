import { getCoolName } from "../app/service";

describe('service test suite', () => {
    it('should return coolname', () => {

        const expected = 'CoolName'
        const actual = getCoolName()

        expect(actual).toBe(expected)
    })
})