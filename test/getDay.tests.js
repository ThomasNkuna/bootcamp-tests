describe('Which day of the week a specific date was test' , function(){

it('returns "Thursday" for this specific date' , function(){
    assert.equal(getDay('2010-04-01'), "Thursday");
    });

it('returns "Monday" for this specific date' , function(){
      assert.equal(getDay('2012-02-13'), "Monday");
    });

});