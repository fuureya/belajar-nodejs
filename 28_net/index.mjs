import net from "net";

const server = net.createServer((client) => {
    console.info("Client Connected");
    client.on("data", function (data) {
        console.info(`Menerima data dari client : ${data.toString()}`);
        client.write(`Hello ${data.toString()} \r\r`);
    })
})

server.listen(3000, "localhost")