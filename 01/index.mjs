import { readFile } from "node:fs/promises";

const sum = (data) => data.reduce((prev, curr) => (prev += parseInt(curr, 10)), 0);

const input = await readFile("input.txt", "utf-8");
const elves = input
  .split("\n\n")
  .map((value) => value.split("\n").filter((value) => !!value))
  .map(sum)
  .sort((a, b) => b - a);
const topThree = elves.slice(0, 3);

console.log(`Find the Elf carrying the most Calories. How many total Calories is that Elf carrying? ${topThree[0]}`);
console.log(
  `Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total? ${sum(
    topThree
  )}`
);
