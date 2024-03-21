// perbedaan jika menggunakan async await lama

function sampleFunction() {
    return Promise.resolve('alhamdulillah ini cara lama :D');
}

async function run() {
    const name = await sampleFunction();
    console.info(name)
}

run()


function sampleFunction2() {
    return Promise.resolve('Alhamdulillah ini cara ke modules :D');
}

const name = await sampleFunction2();
console.info(name)