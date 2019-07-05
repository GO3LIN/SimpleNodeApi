let players = require('./players.json').players;

const playersApi = {
  listPlayers: () => {
    return players.sort(p => p.id);
  },
  getPlayer: (id) => {
    return players.find(p => p.id === id);
  },
  deletePlayer: (id) => {
    const newPlayers = players.filter(p => p.id !== id);
    return newPlayers.length === players.length ? undefined : newPlayers;
  }
}

module.exports = playersApi;