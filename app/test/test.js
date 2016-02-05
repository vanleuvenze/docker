var assert = require("assert");

describe('Array', function(){
  describe('indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Object', function(){
  describe('adding properties', function(){
    it('should add a property to the object', function(){
      var obj = {};
      obj.name = 'Zack'
      assert.equal(obj.name, 'Zack');
    });
  });
});

describe('Boolean', function(){
  describe('can be true or false', function(){
    it('zero should equal false, one should equal true', function(){
      assert.equal(1, true);
      assert.equal(0, false);
    });
  });
});

describe('Boolean', function(){
  describe('can be true or false', function(){
    it('zero should equal false, one should equal true', function(){
      assert.equal(1, true);
      assert.equal(0, false);
    });
  });
});