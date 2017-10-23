//import { Math } from "../../lib/math";
import { Math } from "../../lib/index";
import { TestFixture, TestCase, Test, Expect } from "alsatian";
//-----------------------------------------------------------------------------
@TestFixture()
export class Math_Add {
    @TestCase(0, 0, 0)
    @TestCase(1, 2, 3)
    @TestCase(2, 1, 3)
    public Summands_given___correct_sum(a: number, b: number, res: number): void {
        const sut = new Math();

        const actual = sut.Add(a, b);

        Expect(actual).toBe(res);
    }
    //-------------------------------------------------------------------------
    @TestCase(9007199254740992, 1)
    @TestCase(1, 9007199254740992)
    public MaxValue_plus_1___throws_RangeError(a: number, b: number): void {
        const sut = new Math();

        Expect(() => sut.Add(a, b)).toThrowError(RangeError, "Summand(s) must not be MAX_SAFE_INTEGER (or greater)");
    }
}