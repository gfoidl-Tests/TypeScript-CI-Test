import "tsconfig-paths/register";
import { Math }                          from "@source/index";
import { TestFixture, TestCase, Expect } from "alsatian";
//-----------------------------------------------------------------------------
@TestFixture()
export class Math_Subtract {
	@TestCase(0, 0, 0)
	@TestCase(1, 2, -1)
	@TestCase(2, 1, 1)
	public Args_given___correct_difference(a: number, b: number, res: number): void {
		const sut = new Math();

		const actual = sut.subtract(a, b);

		Expect(actual).toBe(res);
	}
}
