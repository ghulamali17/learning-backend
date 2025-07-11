const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} new req received\n`; 
    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Error writing log:", err);
    });

    console.log("New req");
    res.end("Hello from Server");
});

myServer.listen(8000, () => console.log("Server running"));
