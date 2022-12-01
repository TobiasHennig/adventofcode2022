import { readFile } from "node:fs/promises";

const sum = (data) => data.reduce((prev, curr) => prev += parseInt(curr, 10), 0);
const input = await readFile("input.txt", "utf-8");
const elves = input.split("\n\n").map((value) => value.split("\n").filter((value) => !!value)).map(sum);
const result = Math.max(...elves);

console.log(`How many total Calories is that Elf carrying? ${result}`);