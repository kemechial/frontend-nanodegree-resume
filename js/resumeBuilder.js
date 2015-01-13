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
var education={};
education.school='harvard';
education['years']=5;
education.city='Boston';
var firstName="Developer K";
var formattedName=HTMLheaderName.replace("%data%", firstName);
var formattedRole=HTMLheaderRole.replace("%data%", "Web Developer");
$("#main").prepend(formattedRole).prepend(formattedName);
var testArray=['test1','test2'];
var skills=['PHP','Javascript','JQuery'];
var bio={'name':'Ken E','contact_info':'Turkey','pic_url':'http://placehold.it/50x50','skills':skills};

var work={};
work['position']='engineer';
work.employer='ibm';
work['years']=10;
work.city='NY';
$("#main").append(bio.name);
$("#main").append(work["position"]).append("<br>"+bio.name);

*/

var work={
			"jobs":[
                  {"employer":"Google, Inc.",
                	"title":"Developer",
                  	"location":"San Francisco",
                  	"dates":"January 2012, December 2013",
                  	"description":"developing tools, talking people, eating pizza, buying items Start our full course experience! You’ll have access to a personal Coach for code reviews, project feedback, and pacing support. Earn your verified certificate of " 	
                  	},
                  {
                  	"employer":"Yahoo, Inc.",
                    "title":"Developer",
                      "location":"Los Angeles",
                      "dates":"January 2011, December 2012",
                      "description":"developing tools"
                    }
                  ]
                  
};

var projects={
		"projects":[
              {
            	"title":"Developer",
              	"dates":"January 2012, December 2013",
              	"description":"developing tools",
              	"image":"http://placehold.it/50x50"	
              	},
              {
                "title":"Developer",
                  "dates":"January 2011, December 2012",
                  "description":"developing tools",
                "image":"http://placehold.it/50x50"	  
                }
              ]
              
};


var bio={"name":"ken Developer",
		  "role":"Engineer",
		  "welcomeMessage":"Welcome to my Profile!",		  
		"contacts":{
			"mobile":54072394,
					"email":"ken@mail.com",
					"github":"ke_user",
					"location":"Turkey"
						},
		"skills":[
		          
		          "PHP",
		          "Ruby",
		          "Javascript",
		          "Image Processing",
		          "HTML"
		          
		          ]
		};


var education={
		"schools":[{
			"name":"MIT",
			"city":"Boston",
			"degree":"B.S.",
			"majors":["CS","ME"],
			"dates":"2010-2011",
			"url":"http://www.mit.edu"
			 },
		     {	
			 "name":"Stanford",
			 "city":"L.A.",
			 "degree":"M.S.",
			 "majors":["CS","Art"],
			"dates":"2012-2013",
		     "url":"http://www.mit.edu"
		     }
		],
		"onlineCourse":[
		                 {"title":"Image Processing",
		                "school":"Coursera",
		                "dates":"2014",
		                "url":"http://www.coursera.com"},
		                {"title":"Web Architectures",
			                "school":"Coursera",
			                "dates":"2014",
			                "url":"http://www.coursera.com"}
		 ]
   	};

$("#main").prepend(HTMLheaderName.replace("%data%",bio.name));

if (bio.skills.length) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	
} else{
	$("#header").append('<span style="'+'color:red">No Skills at all...</span>');
};

/*

for(var i=0; i<9;i++){ 
	console.log(i);
	}
*/


function displayWork(){
	for(var job in work["jobs"]){
		$("#workExperience").append(HTMLworkStart);
		console.log(job);
		var formattedJob=HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"])
		+HTMLworkTitle.replace("%data%",work.jobs[job].title);
		$(".work-entry:last").append(formattedJob);
		var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}


displayWork();
$("#main").append(internationalizeButton);

function inName(name){
	var parts=name.trim().split(" ");
	parts[0]=parts[0].slice(0,1).toUpperCase()+parts[0].slice(1).toLowerCase();
	parts[1]=parts[1].toUpperCase();
	return parts.join(" ");
}

projects.display=function(){
	for(var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDate=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].image);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
	}
		
}

projects.display();

