const expect =  require('chai').expect;
const playersApi = require('../players');

describe('players api', function(){

  it('should list players sorted by Id', function(){
    const players = playersApi.listPlayers();
    expect(players).to.be.an('array')
    expect(players[1].id).to.be.gt(players[0].id);
  });

  it('should get a player', function(){
    const player = playersApi.getPlayer(52);
    expect(player).to.be.an('object');
    expect(player.shortname).to.equal('N.DJO');
  });

  it('should delete player', function(){
    const initPlayers = playersApi.listPlayers();
    newPlayers = playersApi.deletePlayer(52);
    playersId = newPlayers.map(p => p.id);
    expect(playersId).to.not.contain(52);
  });

})