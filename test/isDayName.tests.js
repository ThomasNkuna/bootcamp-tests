describe('Day of the week string parameter test' , function(){

it('returns "true" if string paramter passed is in day of the week' , function(){
      assert.equal(isDayName('Saturday'), true);
      assert.equal(isDayName('Monday'), true);
    });

it('returns "false" if string parameter passed is not in day of the week ' , function(){
      
     assert.equal(isDayName('January'), false, 'January is not a day');
    });

});