const fs = require("node:fs");
const readline = require("node:readline");

const events = require("events");

export const partOne = async (fileName: string) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity,
  });

  rl.on("line", (line: string) => {
    

  });

  await events.once(rl, "close");

  return 40;
};

export const partTwo = async (fileName: string) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity,
  });
  const arr: any[] = [];
  rl.on("line", (line: string) => {
  });

  await events.once(rl, "close");
  return 0;
};
