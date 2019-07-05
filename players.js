let players = require('./players.json').players;

const playersApi = {
  listPlayers: () => {
    return players.sort(p => p.id);
  },
  getPlayer: (id) => {
    return players.find(p => p.id === id);
  },
  deletePlayer: (id) => {
    return players.filter(p => p.id !== id);
  }
}

module.exports = playersApi;