// import fs from "fs";
import fs from "fs/promises";

// const buffer = fs.readFileSync('../path/index.mjs');

// console.info(buffer.toString());

// fs.writeFileSync('make.txt', 'Hello Dunia');

const buffer = await fs.readFile('17_filesystem.mjs');

console.info(buffer.toString());

fs.writeFileSync('make.txt', 'Hello Dunia');