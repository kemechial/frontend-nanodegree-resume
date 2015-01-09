/*
$("#main").append("Developer K");

var age=32;
var awesomeThoughts="I am K and I am awesome!";
console.log(awesomeThoughts);
var email="ken@udacity.com";
var newEmail=email.replace('udacity', 'gmail'); 
console.log(email);
console.log(newEmail);
var funThoughts=awesomeThoughts.replace("awesome", "fun");
$("#main").append("<br>"+funThoughts);
*/
var firstName="Developer K";
var formattedName=HTMLheaderName.replace("%data%", firstName);
var formattedRole=HTMLheaderRole.replace("%data%", "Web Developer");
$("#main").prepend(formattedRole).prepend(formattedName);
var testArray=['test1','test2'];
