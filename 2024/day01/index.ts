import fs from "fs";
import readline from "node:readline";
import events from 'events';

const partOne = async (fileName: string) => {

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
  });

  const firstColumn: number[] = [];
  const secondColumn: number[] = [];
  const total: number[] = [];


  rl.on("line", (line: string) => {
    const getNum = line.split(' ')
    const firstNum = getNum[0];
    const secondNum = getNum[getNum.length - 1];
    firstColumn.push(parseInt(firstNum));
    secondColumn.push(parseInt(secondNum));
  });

  await events.once(rl, 'close');
  firstColumn.sort()
  secondColumn.sort()

for (let index = 0; index < firstColumn.length; index++) {
  const first = firstColumn[index];
  const second = secondColumn[index];

  if (first > second) {
     total.push(first-second);
  }

  if (second > first) {

     total.push(second-first);
  }
}
  return total.reduce((prev, curr) => {
    return prev+curr
  });

};

const partTwo = async (fileName: string) => {

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
  });

  const firstColumn: number[] = [];
  const secondColumn: number[] = [];
  const total: number[] = [];


  rl.on("line", (line: string) => {
    const getNum = line.split(' ')
    const firstNum = getNum[0];
    const secondNum = getNum[getNum.length - 1];
    firstColumn.push(parseInt(firstNum));
    secondColumn.push(parseInt(secondNum));
  });

  await events.once(rl, 'close');


for (let index = 0; index < firstColumn.length; index++) {
  const first = firstColumn[index];
  const test = secondColumn.filter(value => value === first)
  const num = first * test.length

  total.push(num);
}
  return total.reduce((prev, curr) => {
    return prev+curr
  });

};


export {
  partOne,
  partTwo
}