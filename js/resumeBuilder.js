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
                  	"description":"developing tools"	
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


var bio={"name":"Ken E",
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
		          "Javascript"
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

