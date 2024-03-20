// adalah standart library pada nodejs. setiap perintah yang di jalankan di anggap sbg proses dan juga merupakan instance dari event emmiter
// https://nodejs.org/api/process.html


import process, { exitCode } from "process";

process.addListener('exit', () => {
    console.info(`node js with exit code ${exitCode}`)
})