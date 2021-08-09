describe('isFromGauteng test' , function(){

it('returns "true" if RegNumber is from Gauteng' , function(){
       assert.equal(isFromGauteng('DR 45 LR GP'), true); 
    });

it('returns "false" if otherwise' , function(){
      assert.equal(isFromGauteng('CJ 123 908'), false);
    });

});

