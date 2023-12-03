import { partOne, partTwo } from ".";
import { describe, expect, test } from 'vitest'


describe.skip("day02 Part 1", () => {
    test("example input", async () => {
        const value = await partOne('example01.txt');
        expect(value).toBe(8);
    })

    test("real input", async () => {
        const value = await partOne('input.txt');
        expect(value).toBe(2406);
    })
});

describe("day02 Part 2", () => {
    test("example input", async () => {
        const value = await partTwo('example01.txt');
        expect(value).toBe(2286);
    })

    test("real input", async () => {
        const value = await partTwo('input.txt');
        expect(value).toBe(78375);
    })
});