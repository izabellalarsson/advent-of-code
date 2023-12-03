import { describe, expect, test } from 'vitest'
import { partOne, partTwo, } from '.';

describe.skip("day01/one", () => {
    test("example input", async () => {
        const value = await partOne('example01.txt');
        expect(value).toBe(142);
    })

    test("example input", async () => {
        const value = await partTwo('example02.txt');
        expect(value).toBe(281);
    })
});