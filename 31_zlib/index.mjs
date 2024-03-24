import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync('31_zlib/catatan.txt');
const result = zlib.gzipSync(source);

fs.writeFileSync("31_zlib/kompresi/zlib.mjs.txt", result);

// zlib decompres
const decom = fs.readFileSync('31_zlib/kompresi/zlib.mjs.txt');
const results = zlib.unzipSync(decom);

console.info(results.toString());
