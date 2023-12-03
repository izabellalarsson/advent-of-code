import { partOne, partTwo } from ".";
import { describe, expect, test } from 'vitest'


describe.skip("Day 3, Part 1", () => {
    test("example input", async () => {
        const value = await partOne('example.txt');
        expect(value).toBe(4361);
    })

    test.skip("real input", async () => {
        const value = await partOne('input.txt');
        expect(value).toBe(2406);
    })
});

describe.skip("day02 Part 2", () => {
    test("example input", async () => {
        const value = await partTwo('example01.txt');
        expect(value).toBe(2286);
    })

    test("real input", async () => {
        const value = await partTwo('input.txt');
        expect(value).toBe(78375);
    })
});