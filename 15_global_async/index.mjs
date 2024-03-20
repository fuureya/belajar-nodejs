async function samplePromise() {
    return Promise.resolve("Agil");
}

const data = await samplePromise(); // error
console.log(data);

// jika dia bukan sebagai module js maka akan error.....
// di karenakan async js sebagai global async