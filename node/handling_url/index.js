const http = require("http");
const url = require("url"); 

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    console.log("Request received for:", pathname);

    res.setHeader("Content-Type", "text/plain");

    if (pathname === "/") {
        res.statusCode = 200;
        res.end("Welcome to the Home Page!");
    } else if (pathname === "/about") {
        res.statusCode = 200;
        res.end("This is the About Page.");
    } else if (pathname === "/contact") {
        res.statusCode = 200;
        res.end("Contact us at contact@example.com");
    } else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
