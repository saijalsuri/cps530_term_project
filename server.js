const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer(req, res);
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});