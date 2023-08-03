import emoji from "react-easy-emoji";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiChakraui,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import {FaAws} from "react-icons/fa"

export const greetings = {
  name: "Tushar Sonavane",
  title: "Hi all, I'm Tushar",
  description:
    "An  aspiring Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "a",
};

export const openSource = {
	githubUserName: "Tushar00007",
};

export const contact = {};

export const socialLinks = {
  facebook: "a",
  instagram: "https://www.instagram.com/stylish_tushar/?igshid=NGExMmI2YTkyZg%3D%3D",
  twitter: "https://twitter.com/TusharSona55993",
  github: "https://github.com/Tushar00007",
  linkedin: "https://www.linkedin.com/in/tushar-sonavane-514a9b205/",
  email: "mailto:tusharsonavane21@gmail.com",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "A Full Stack Developer Who Wants To Explore Every Tech Stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "cib:html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "cib:css3-shiled",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "cib:javascript",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "cib:react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "la:node-js",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "cib:npm",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "cib:mongodb",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "cib:amazon-aws",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "cib:git",
    },

    {
      skillName: "expressjs",
      fontAwesomeClassname: "simple-icons:express",
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "cib:redux",
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "cib:redis",
    },
  ],
};
export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
  {
    schoolName:
      "Dr. Babasaheb Ambedkar Technological University, Lonere, Maharashtra",
    subHeader: "B-Tech in Electronics & Telecommnication",
    duration: "September 2019 - April 2022",
  },
  {
    schoolName: "Almabetter Bengaluru, Karnataka",
    subHeader: "Full Stack Web Development Course",
    duration: "November 2022 - April 2023",
  },
];

// export const experience = [
// 	{
// 		role: "Software Engineer",
// 		company: "Google",
// 		companylogo: "/img/icons/common/google.svg",
// 		date: "June 2018 – Present",
// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 		descBullets: [
// 			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
// 		],
// 	},
// 	{
// 		role: "Front-End Developer",
// 		company: "Github",
// 		companylogo: "/img/icons/common/github.svg",
// 		date: "May 2017 – May 2018",
// 		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// 	{
// 		role: "Software Engineer Intern",
// 		company: "Airbnb",
// 		companylogo: "/img/icons/common/airbnbLogo.png",
// 		date: "Jan 2015 – Sep 2015",
// 		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	},
// ];

export const projects = [
  {
    heroImag: "https://i.imgur.com/EbQBKEH.png",
    name: "Bookmyshow",
    desc: "This is a backend capston project given by almabetter in this project we created bookmyshow website this project have vary simple UI and this website is very easy to use ( userfriendly ) and also a work in any devices ( Responsiveness )",
    link: "https://bookmyshows-frontend.netlify.app/",
    github: "https://github.com/Tushar00007/Bookmyshow-Backend-",
    techStacks: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript1 />,
      <DiNodejsSmall />,
      <SiExpress />,
      <SiMongodb />,
      <FaAws />,
    ],
  },
  {
    heroImag: "https://i.imgur.com/FXS48HM.png",
    name: "Flashcard Generator",
    desc: "This is a Flashcard Generator frontend capston project that Almabetter has provided.",
    link: "https://genuine-valkyrie-ca0c49.netlify.app/",
    github: "https://github.com/Tushar00007/flashcard",
    techStacks: [
      <DiReact />,
      <SiRedux/>,
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript1 />,
       <SiNetlify/>
      
    ],
  }
  
];

// export const feedbacks = [
// 	{
// 		name: "Hassan Mehmood",
// 		feedback:
// 			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
// 	},
// 	{
// 		name: "Maheen Altaf",
// 		feedback:
// 			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
// 	},
// ];
