const http = require('http');
const url = require('url');
const PORT = 2222;

const playersApi = require('./players');

const playerRegex = /\/players\/([0-9]+)$/;

const handleRequest = (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  const route = url.parse(req.url).pathname;

  // LIST players endpoint
  if(route === '/players' && req.method === 'GET') {
    const players = playersApi.listPlayers();
    res.end(JSON.stringify(players));
  }
  // GET player endpoint
  else if(playerRegex.test(route) && req.method === 'GET') {
    // Get player id from url
    const playerId = getPlayerId(route);
    const player = playersApi.getPlayer(playerId);
    res.end(JSON.stringify(player));
  }
  // DELETE player endpoint
  else if(playerRegex.test(route) && req.method === 'DELETE') {
    console.log('delete');
    const playerId = getPlayerId(route);
    const players = playersApi.deletePlayer(playerId);
    res.end(JSON.stringify(players));
  }

  res.end(JSON.stringify('Hello world !'));
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

getPlayerId = route => {
  return parseInt(route.match(playerRegex)[1], 10)
};

