describe('Same weekday test' , function(){

it('returns "true" if both dates have the same weekday' , function(){
      assert.equal(sameWeekday('2016-11-19', '2016-11-26'), true);
    });

it('returns "false"  if both dates have the same weekday' , function(){
      assert.equal(sameWeekday('2016-11-19', '2016-11-28'), false);
    });

});