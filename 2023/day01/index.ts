const fs = require("node:fs");
const readline = require("node:readline");
const events = require('events');

const partOne = async (fileName: string) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
  });

  const arr: number[] = [];

  rl.on("line", (line: string) => {
    const getNum = [...line.matchAll(/[0-9]/g)].flat();
    const firstNum = getNum[0];
    const secondNum = getNum[getNum.length - 1];
    const number = firstNum + secondNum;
    arr.push(parseInt(number));
  });

  await events.once(rl, 'close');
  const value = arr.reduce((a, b) => a + b, 0);
  return value;
};


console.log(await partOne("example01.txt"));

const partTwo = async (fileName: string) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
  });

  const arr: number[] = [];

  rl.on("line", (line: string) => {
    const getStrValue = line.match(
      /one|two|three|four|five|six|seven|eight|nine|[0-9]/g
    );

    if (getStrValue === null) return;
    
    const lineis = line.replaceAll("one", "one1one")
    .replaceAll("two", "two2two")
    .replaceAll("three", "three3three")
    .replaceAll("four", "four4four")
    .replaceAll("five", "five5five")
    .replaceAll("six", "six6six")
    .replaceAll("seven", "seven7seven")
    .replaceAll("eight", "eight8eight")
    .replaceAll("nine", "nine9nine");
    
    const getNum = [...lineis.matchAll(/[0-9]/g)].flat();
    const firstNum = getNum[0];
    const secondNum = getNum[getNum.length - 1];
    const number = firstNum + secondNum;
    arr.push(parseInt(number));
  });

  await events.once(rl, 'close');

  const value = arr.reduce((a, b) => a + b, 0);
  return value;
};


export {
  partOne,
  partTwo,
}