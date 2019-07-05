const http = require('http');
const url = require('url');
const PORT = 2222;

const playersApi = require('./players');

const handleRequest = (req, res) => {

  const route = url.parse(req.url).pathname;
  const playerRegex = /\/players\/([0-9]+)/;

  // LIST players endpoint
  if(route === '/players' && req.method === 'GET') {
    const players = playersApi.listPlayers();
    res.end(JSON.stringify(players));
  }
  // GET player endpoint
  else if(playerRegex.test(route) && req.method === 'GET') {
    // Get player id from url
    const playerId = parseInt(route.match(playerRegex)[1], 10);
    const player = playersApi.getPlayer(playerId);
    res.end(JSON.stringify(player));
  }
  // DELETE player endpoint
  else if(route === '/players' && req.method === 'DELETE') {
    
  }
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

