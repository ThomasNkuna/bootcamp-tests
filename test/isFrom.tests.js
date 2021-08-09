var fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true

var fromBellville = isFrom('CJ 98912', 'CY'); //returns false

describe('isFrom test' , function(){

it('returns "true" if it is from Paarl' , function(){
       assert.equal(fromPaarl, true, 'Should be from Paarl');
    });

it('returns "false" if it is from Bellville' , function(){
      assert.equal(fromBellville, false, 'Should be from Bellville - starting with CY');
    });

});
