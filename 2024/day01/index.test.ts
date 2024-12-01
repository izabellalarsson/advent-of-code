import { describe, expect, test } from 'vitest'
import { partOne, partTwo } from '.';

describe("day01/one", () => {
    test("example input", async () => {
        const value = await partOne('day01/example01.txt');
        expect(value).toBe(11);
    })

    test("input", async () => {
        const value = await partOne('day01/input.txt');
        expect(value).toBe(2904518);
    })
});

describe("day01/two", () => {
    test("example input", async () => {
        const value = await partTwo('day01/example02.txt');
        expect(value).toBe(31);
    })

    test("input", async () => {
        const value = await partTwo('day01/input.txt');
        expect(value).toBe(18650129);
    })
});