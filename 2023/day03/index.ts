const fs = require("node:fs");

const specialCharacters = ["@", "#", "$", "%", "&", "*", "=", "+", "/", "-"];

const adjacents = [
  [0, 1], // Top
  [0, -1], // Bottom
  [-1, 0], // Left
  [1, 0], // Right
  [1, 1], // Top right
  [-1, 1], // Top left
  [1, -1], // Bottom right
  [-1, -1], // Bottom left
];

function isSurroundedBySpecial(grid: string[][], x: number, y: number) {
  const match = adjacents.find(([adjecantX, adjecantY]) => {
    const posX = x + adjecantX;
    const posY = y + adjecantY;

    return (
      posX >= 0 && // Check if out of bounds on the left.
      posX < grid.length && //   Check if out of bounds on the right
      posY >= 0 &&
      posY < grid[0].length && // Check if out of bounds on the top or bottom
      specialCharacters.includes(grid[posX][posY])
    );
  });

  if (!match) {
    return null;
  }

  return {
    x: x + match[0],
    y: y + match[1],
  };
}

export const partOne = async (fileName: string) => {
  try {
    const data = fs.readFileSync(fileName, "utf8")
    const lines = data.split("\n");
    const grid = lines.map((line) => line.split(""));

    const surroundedNumbers: number[] = [];

    grid.forEach((line, y) => {
      return [...line.join("").matchAll(/\d+/g)].map((match) => {
        const startOfMatch = match.index;

        if (typeof startOfMatch === "undefined") {
          return;
        }

        let matchSurrounded = false;

        for (let x = 0; x < match[0].length; x++) {
          if (isSurroundedBySpecial(grid, y, startOfMatch + x)) {
            matchSurrounded = true;
            break;
          }
        }

        if (matchSurrounded) {
          surroundedNumbers.push(parseInt(match[0]));
        }
      });
    });
    
    return surroundedNumbers.reduce((acc, curr) => acc + curr, 0)
  
  } catch (error) {
    console.error(error)
  }
};

export const partTwo = async (fileName: string) => {
  try {
    const data = fs.readFileSync(fileName, "utf8")
    const lines = data.split("\n");
    const grid = lines.map(line => line.split(''))

    const symbolHits = new Map<string, number[]>()
  
    grid.forEach((line, y) => {
      return [...line.join('').matchAll(/\d+/g)].map(match => {
        const startOfMatch = match.index
  
        if (typeof startOfMatch === 'undefined') {
          return
        }
  
        for (let x = 0; x < match[0].length; x++) {
          const matchCoords = isSurroundedBySpecial(grid, y, startOfMatch + x)
          if (matchCoords) {
            const key = `${matchCoords.x},${matchCoords.y}`
            if (symbolHits.has(key)) {
              const newValues = new Set([...symbolHits.get(key)!, parseInt(match[0])])
              symbolHits.set(key, [...newValues])
            } else {
              symbolHits.set(key, [parseInt(match[0])])
            }
          }
        }
      })
    })
  
    return Array.from(symbolHits.values())
      .filter(values => values.length === 2)
      .reduce((sum, [a, b]) => sum + a * b, 0)
  
  } catch (error) {
    console.error(error)
  }
};
