const http = require('http');
const url = require('url');
const PORT = 8080;

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
    const playerId = getPlayerId(route);
    const player = playersApi.getPlayer(playerId);
    handlePlayerNotFound(player, res);
    res.end(JSON.stringify(player));
  }
  // DELETE player endpoint
  else if(playerRegex.test(route) && req.method === 'DELETE') {
    const playerId = getPlayerId(route);
    const players = playersApi.deletePlayer(playerId);
    handlePlayerNotFound(player, res);
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

handlePlayerNotFound = (player, res) => {
  if(!player) {
    res.statusCode = 404;
    res.end(JSON.stringify('Not found'));
  }
}
