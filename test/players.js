const expect =  require('chai').expect;
const playersApi = require('../players');

describe('players api', function(){

  it('should list players sorted by Id', function(){
    const players = playersApi.listPlayers();
    expect(players).to.be.an('array')
    expect(players[1].id).to.be.gt(players[0].id);
  });

  it('should get a player and return null if not matching', function(){
    const player = playersApi.getPlayer(52);
    expect(player).to.be.an('object');
    expect(player.shortname).to.equal('N.DJO');

    const player2 = playersApi.getPlayer(-20);
    expect(player2).to.be.undefined;
  });

  it('should delete player', function(){
    const initPlayers = playersApi.listPlayers();
    const newPlayers = playersApi.deletePlayer(52);
    playersId = newPlayers.map(p => p.id);
    expect(playersId).to.not.contain(52);

    const newPlayers2 = playersApi.deletePlayer(20);
    expect(newPlayers2).to.be.undefined;

  });

})