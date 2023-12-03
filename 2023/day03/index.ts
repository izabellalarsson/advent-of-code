import { c } from "vitest/dist/reporters-5f784f42.js";

const fs = require("node:fs");
const readline = require("node:readline");

const events = require("events");

export const partOne = async (fileName: string) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity,
  });

  const arr: any[] = [];
  const redCubesAdded = 12;
  const greenCubesAdded = 13;
  const blueCubesAdded = 14;

  rl.on("line", (line: string) => {
    const split = line.split(": ");
    const gameNumber = split[0].split("Game ")[1];

    const redCubes = split[1].match(
      /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) red/g
    );
    const greenCubes = split[1].match(
      /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) green/g
    );
    const blueCubes = split[1].match(
      /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) blue/g
    );

    const redCubesHighest = redCubes?.map((cube) =>
      parseInt(cube.slice(0, -4), 10)
    );
    const greenCubesHighest = greenCubes?.map((cube) =>
      parseInt(cube.slice(0, -4), 10)
    );
    const blueCubesHighest = blueCubes?.map((cube) =>
      parseInt(cube.slice(0, -4), 10)
    );

    if (
      redCubesHighest &&
      Math.max(...redCubesHighest) <= redCubesAdded &&
      greenCubesHighest &&
      Math.max(...greenCubesHighest) <= greenCubesAdded &&
      blueCubesHighest &&
      Math.max(...blueCubesHighest) <= blueCubesAdded
    ) {
      arr.push(parseInt(gameNumber, 10));
    }
  });

  await events.once(rl, "close");

  return arr.reduce((a, b) => a + b, 0);
};

export const partTwo = async (fileName: string) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity,
  });
  const arr: any[] = [];
  rl.on("line", (line: string) => {
    const split = line.split(": ");

    const redCubes = split[1].match(
      /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) red/g
    );
    const greenCubes = split[1].match(
      /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) green/g
    );
    const blueCubes = split[1].match(
      /([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]) blue/g
    );

    const redCubesHighest =
      redCubes &&
      Math.max(...redCubes?.map((cube) => parseInt(cube.slice(0, -4), 10)));
    const greenCubesHighest =
      greenCubes &&
      Math.max(...greenCubes?.map((cube) => parseInt(cube.slice(0, -4), 10)));
    const blueCubesHighest =
      blueCubes &&
      Math.max(...blueCubes?.map((cube) => parseInt(cube.slice(0, -4), 10)));

    if (redCubesHighest && greenCubesHighest && blueCubesHighest) {
      arr.push(redCubesHighest * greenCubesHighest * blueCubesHighest);
    }
  });

  await events.once(rl, "close");
  return arr.reduce((a, b) => a + b, 0);
};
