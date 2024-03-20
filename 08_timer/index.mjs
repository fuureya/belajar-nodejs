/*


- Timer merupakan standart library untuk melakukan scheduling
- function timer terdaoat di global sehingga kita bisa menggunakan nya tanpa melakukan import
- jika menggunakan timer versi promise kita bisa meng import dari module timer/promise


*/

// versi callback 

setInterval(() => {
    console.info(`Timer at ${new Date() }`);
}, 1000)