import { readFile } from "node:fs/promises";

const shapeScore = {
  X: 1,
  Y: 2,
  Z: 3,
};

const sum = (data) => data.reduce((prev, curr) => (prev += curr), 0);
const isDraw = (a, b) => (a === "A" && b === "X") || (a === "B" && b === "Y") || (a === "C" && b === "Z");
const isWon = (a, b) => (b === "X" && a === "C") || (b === "Y" && a === "A") || (b === "Z" && a === "B");
const getShape = (a, b) => {
  if (a === "A") {
    if (b === "X") return "Z";
    else if (b === "Y") return "X";
    else if (b === "Z") return "Y";
  } else if (a === "B") {
    if (b === "X") return "X";
    else if (b === "Y") return "Y";
    else if (b === "Z") return "Z";
  } else if (a === "C") {
    if (b === "X") return "Y";
    else if (b === "Y") return "Z";
    else if (b === "Z") return "X";
  }
};
const calculateScore = (a, b) => (isDraw(a, b) ? 3 : isWon(a, b) ? 6 : 0) + shapeScore[b];

const input = await readFile("input.txt", "utf-8");
const data = input
  .split("\n")
  .filter((value) => !!value)
  .map((value) => value.split(" "));
const scores = data.map((value) => calculateScore(...value));
const secondScores = data.map((value) => [value[0], getShape(...value)]).map((value) => calculateScore(...value));
const score = sum(scores);
const secondScore = sum(secondScores);

console.log(`What would your total score be if everything goes exactly according to your strategy guide? ${score}`); // 11906
console.log(
  `Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide? ${secondScore}`
); // 11906
