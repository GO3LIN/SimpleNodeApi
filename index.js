const http = require('http');
const url = require('url');
const PORT = 2222;

const playersApi = require('./players');

const handleRequests = (req, res) => {

  const route = url.parse(req.url).pathname;

  if(route === '/players' && req.method === 'GET') {
    
  }
  else if(/\/players\/[0-9]+/.test(route) && req.method === 'GET') {

  }
  else if(route === '/players' && req.method === 'DELETE') {
    
  }
}

const server = http.createServer(handleRequests);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

