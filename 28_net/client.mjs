import net from "net";

const server = net.createConnection({ port: 3000, host: "localhost" });

connection.addListener("data", (data) => {
    console.info(`receive data from server : ${data.toString()}`);
})

setInterval(() => {
    connection.write("Eko \r\r");
}, 2000)