import fs from 'fs';

const writer = fs.createWriteStream('targer.log');
writer.write("Agil Jibrin");
write.close();

const reader = fs.createReadStream("target.log");
reader.on("data", () => {
    console.info(data.toString());
    reader.close()
})