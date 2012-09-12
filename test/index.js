
var parse = require('..');

describe('#RGB', function(){
  it('should parse', function(){
    parse('#fc0').r.should.equal(255);
    parse('#fc0').g.should.equal(204);
    parse('#fc0').b.should.equal(0);
    parse('#fc0').a.should.equal(1);
  })
})

describe('#RRGGBB', function(){
  it('should parse', function(){
    parse('#ffcc00').r.should.equal(255);
    parse('#ffcc00').g.should.equal(204);
    parse('#ffcc00').b.should.equal(0);
    parse('#ffcc00').a.should.equal(1);
  })
})

describe('rgb(n, n, n)', function(){
  it('should parse', function(){
    parse('rgb(255, 204, 0)').r.should.equal(255);
    parse('rgb(255, 204, 0)').g.should.equal(204);
    parse('rgb(255, 204, 0)').b.should.equal(0);
    parse('rgb(255, 204, 0)').a.should.equal(1);
  })
})