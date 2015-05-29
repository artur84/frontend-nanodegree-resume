//$("#main").append("Arturo Escobedo");
var firstname = "Pilinya";
console.log(firstname);
var awesomeThoughts = "I am Arturo and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Arturo Escobedo");
var formattedRole = HTMLheaderRole.replace("%data%", "Informatics and Robotics Expert");

$("#header").append(formattedName);
$("#header").append(formattedRole);