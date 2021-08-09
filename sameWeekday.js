function sameWeekday(day1,day2){
var date1 = new Date(day1);
var date2 = new Date(day2);
  
return date1.getDay() == date2.getDay();

}