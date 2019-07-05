const expect =  require('chai').expect;
const playersApi = require('../players');

describe('players api', function(){

  it('should list players sorted by Id', function(){
    const players = playersApi.listPlayers();
    expect(players).to.be.an('array')
    expect(players[1].id).to.be.gt(players[0].id);
  });

  it('should get player', function(){

  });

  it('should delete player', function(){

  });

})