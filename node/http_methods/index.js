const http = require("http");

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;          

    console.log(`Request: ${method} ${url}`);

    res.setHeader("Content-Type", "text/plain");

    // Handle GET request
    if (method === "GET" && url === "/") {
        res.statusCode = 200;
        res.end("GET request to Home Page");

    } else if (method === "POST" && url === "/submit") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();  
        });

        req.on("end", () => {
            console.log("POST data received:", body);
            res.statusCode = 200;
            res.end("POST data received");
        });

    } else if (method === "PUT" && url === "/update") {
        res.statusCode = 200;
        res.end("PUT request to /update");

    } else if (method === "DELETE" && url === "/delete") {
        res.statusCode = 200;
        res.end("DELETE request to /delete");

    } else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
