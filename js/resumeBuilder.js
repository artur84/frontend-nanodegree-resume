//$("#main").append("Arturo Escobedo");
var firstname = "Pilinya";
console.log(firstname);
var awesomeThoughts = "I am Arturo and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
//$("#main").append(funThoughts);



bio = {
			"name":"Arturo Escobedo",
			"role": "Informatics and Robotics Expert",
			"contact":{
				"mobile":"5543701554",
				"email":"arturoescobedo.iq@gmail.com",
				"github":"artur84??",
				"twitter":"@Arturo84",
				"location":"Mexico City"
			},
			"picUrl":"images/fry.jpg",
			"welcomeMessage": "Bienvenido!",
			"skils":["Bueno", "Bonito", "Barato"]
			
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(HTMLbioPic.replace("%data%", bio.picUrl));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#letsConnect").append(HTMLmobile.replace("%data%", bio.contact.mobile));
$("#letsConnect").append(HTMLemail.replace("%data%", bio.contact.email));
$("#letsConnect").append(HTMLgithub.replace("%data%", bio.contact.github));
$("#letsConnect").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
$("#letsConnect").append(HTMLlocation.replace("%data%", bio.contact.location));