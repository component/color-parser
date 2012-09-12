
var parse = require('..');

describe('#RGB', function(){
  it('should parse', function(){
    parse('#fc0').r.should.equal(255);
    parse('#fc0').g.should.equal(204);
    parse('#fc0').b.should.equal(0);
    parse('#fc0').a.should.equal(1);
  })
})