// var awesomeThoughts = "I am Jon and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

var name = "Jon Gordon";
var role = "Mobile/Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var bio = {
	name : "Jon Gordon",
	role : "Mobile/Web Developer",
	contact_info : {
		email : "jon@jongor-software.com",
		twitter : "@gordon_jon",
		github : "jon-gordon"
	},
	bioPic : "http://placekitten.com/g/200/300",
	welcome_msg : "Welcome to my JavaScript CV",
	skills : [ "nunchucku", "bow hunting", "computer hacking" ]
};

var work = {
	position : "Systems Design Engineer",
	employer : "G4S Monitoring Technologies Ltd",
	years : 5,
	city : "Leicester"
};

var education = 
[
    {
        "name": "University of Leicester",
        "years": 4,
        "city": "Leicester",
        "degree": "BEng (Hons) with Industry"
    },
    {
        "name": "University of Leicester",
        "years": 2,
        "city": "Leicester",
        "degree": "MSc"
    }
];

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(bio.welcome_msg);
$("#main").append(bio.contact_info.email);
$("#main").append(bio.contact_info.twitter);
$("#main").append(bio.contact_info.github);

$("#main").append(work["position"]);

$("#main").append(education[0].name);