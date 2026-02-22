var Birthyear = prompt("Enter Your BirthYear ()" );

var Birthmonth = prompt("Enter Your BirthMonth ()");

var Birthdate = prompt("Enter Your BirthDate ()");

var Birthdate = new Date (Birthyear, Birthmonth-1, Birthdate);

var today = new Date ();

var diff = today.getTime()-Birthdate.getTime();

var ageYear = today.getFullYear()-Birthdate.getFullYear();

var ageMonth = ageYear * 12 + (today.getMonth()-Birthdate.getMonth());

var ageDay = Math.floor(diff / (1000 * 60 * 24));

var ageMinuts = Math.floor(diff / (1000 * 60));

var ageSecond = Math.floor(diff /1000);

alert (
    "Your Age:\n"+ ageYear+ "year\n"+ ageMonth+ "month\n"+ ageDay+ "day\n"+
    ageMinuts+ "minuts\n"+ ageSecond+ "second");
