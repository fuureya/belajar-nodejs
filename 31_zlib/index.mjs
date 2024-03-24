import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync('31_zlib/catatan.txt');
const result = zlib.gzipSync(source);

fs.writeFileSync("31_zlib/kompresi/zlib.mjs.txt", result);