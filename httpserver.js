const http =require('http');
const port=process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>hello I am Parth Shukla</h1><p>I am an aspiring fullstack developer intereseted to solve real world problems.</p>');
})
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
