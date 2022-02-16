import emoji from "react-easy-emoji";
import { DiHtml5, DiCss3, DiJavascript1, DiNodejsSmall } from "react-icons/di";
import { SiExpress, SiMongodb, SiReact, SiRedux } from "react-icons/si";
import {FaAws} from "react-icons/fa"

export const greetings = {
  name: "Rahul Konda",
  title: "Hi all, I'm Rahul",
  description:
    "An aspiring Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1is7J9mBrD5HrYib73JqveimwH74FVYrP/view?usp=sharing",
};

export const openSource = {
	githubUserName: "rahulk612",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/rahulkonda8149/",
  instagram: "https://www.instagram.com/rahukonda612/",
  twitter: "https://twitter.com/iamrahulkonda",
  github: "https://github.com/rahulk612",
  linkedin: "https://www.linkedin.com/in/rahul-konda-60a167203/",
  email: "mailto:rahulkonda612@gmail.com",
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
    duration: "September 2018 - April 2021",
  },
  {
    schoolName: "Masai School, Koramangala, Bengaluru, Karnataka",
    subHeader: "Full Stack Web Development Course",
    duration: "September 2021 - April 2022",
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
    heroImag:
      "https://scontent.fpnq7-1.fna.fbcdn.net/v/t39.30808-6/p640x640/273872374_3115231302073119_1451091213420027275_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=baKf65lhyoQAX8xtUIm&_nc_ht=scontent.fpnq7-1.fna&oh=00_AT-x3ZMEL3uh4HbI7oZQBnMRc6N1Sgu82HRVJJXkWMr1Ww&oe=620C4ACE",
    name: "Internshala.com",
    desc: "Internshala is India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, and other streams",
    link: "http://sampleclone-env.eba-9dmzyuuw.us-west-2.elasticbeanstalk.com/",
    github: "https://github.com/Rahulk612/Internshala.com",
    techStacks: [
      <DiHtml5/>,
      <DiCss3/>,
      <DiJavascript1/>,
      <DiNodejsSmall/>,
      <SiExpress/>,
      <SiMongodb/>,
      <FaAws/>,
    ],
  },
  {
    heroImag:
      "https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/p640x640/273896973_3115231312073118_8951203589850041709_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=74VuW6jIssoAX9u9bJ_&_nc_ht=scontent.fpnq7-4.fna&oh=00_AT9uTSYUcFp7wOmKtezjb-6zf3f2iDWm85X3KtnNB6aZeg&oe=620D2185",
    name: "Desertcart.in",
    desc: "Desertcart is a popular online clothing store, online furniture store, and the best online shopping site in India",
    link: "https://rahulk612.github.io/desertCart/",
    github: "https://github.com/kavya-2021/DesertCart_Clone",
    techStacks: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />],
  },
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
