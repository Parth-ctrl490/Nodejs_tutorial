const http = require('http');
const fs = require('fs');   // Import fs
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hello I am Parth Shukla</h1><p>I am an aspiring fullstack developer interested in solving real-world problems.</p>');
    } 
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Page</h1><p>This is the about page of Parth Shukla.</p>');
    } 
    else if (req.url === '/hello') {
        fs.readFile('./yoyo.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('<h1>500 Server Error</h1><p>Could not read yoyo.html</p>');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } 
    else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
