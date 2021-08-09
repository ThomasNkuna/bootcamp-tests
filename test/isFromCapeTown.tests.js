describe('isFromCapeTown test' , function(){

it('returns "true" if RegNumber is from FromCapeTown' , function(){
       assert.equal(isFromCapeTown('CA 123 908'), true);

    });

it('returns "false" if RegNumber is not from FromCapeTown' , function(){
      assert.equal(isFromCapeTown('CJ 123 908'), false);
    });

});

