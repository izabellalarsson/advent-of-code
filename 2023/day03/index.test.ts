import { partOne, partTwo } from ".";
import { describe, expect, test } from 'vitest'


describe("Day 3, Part 1", () => {
    test("example input", async () => {
        const value = await partOne('example.txt');
        expect(value).toBe(4361);
    })

    test("real input", async () => {
        const value = await partOne('input.txt');
        expect(value).toBe(525119);
    })
});

describe("Day 3, Part 2", () => {
    test("example input", async () => {
        const value = await partTwo('example.txt');
        expect(value).toBe(467835);
    })

    test("real input", async () => {
        const value = await partTwo('input.txt');
        expect(value).toBe(76504829);
    })
});