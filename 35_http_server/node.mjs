import http from "http";

const server = http.createServer((request, response) => {
    response.write("hello dunia");
    response.end();
});

server.listen(3000)