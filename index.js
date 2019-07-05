const http = require('http');
const url = require('url');
const PORT = 2222;

const playersApi = require('./players');

const handleRequest = (req, res) => {

  const route = url.parse(req.url).pathname;

  // LIST players
  if(route === '/players' && req.method === 'GET') {
    const players = productsApi.listPlayers();
    res.end(JSON.stringify(players));
  }
  // GET player
  else if(/\/players\/[0-9]+/.test(route) && req.method === 'GET') {

  }
  // DELETE player
  else if(route === '/players' && req.method === 'DELETE') {
    
  }
}

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

