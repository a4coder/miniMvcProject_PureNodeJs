require('dotenv').config();
const http = require('http');
const prodcutsControlller = require('./controllers/product.controller');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        switch (req.url) {
            case '/api/products':
                prodcutsControlller.get(req, res);
                break;
            case '/':
                res.writeHead(200, { 'Content-Type': 'text/plan' });
                res.end('in root');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plan' });
                res.end('not found');
                break;
        }
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
});
