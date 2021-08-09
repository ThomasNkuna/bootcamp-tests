describe('isFromLimpopo test' , function(){

it('returns "true" if RegNumber is from Gauteng' , function(){
       assert.equal(isFromLimpopo('KTR 990 L'), true);
    });

it('returns "false" if otherwise' , function(){
      assert.equal(isFromLimpopo('W 990 N'), false);
    });

});
