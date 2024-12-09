import net from "net";

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

 const server = net.createServer((connection) => {
   
    const messageSize = 4;
    const correlationId = 7;

    const buffer = Buffer.alloc(messageSize + 4);

    buffer.writeUInt32BE(correlationId, messageSize);

    connection.write(buffer);

    connection.end();
 });

 server.listen(9092, "127.0.0.1", () => {
    console.log("Server is listening on port 9092");
 });
