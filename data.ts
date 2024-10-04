import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>JavaScript</b>,<b>Tailwind CSS</b> and <b>ReactJs</b>,<b>NextJs</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I can develop robust  REST API using <b>NodeJs</b> & <b>Express</b>, <b> MongoDb </b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "APP Development",
    about:
      "I can build a beautiful and scalable Andriod/Ios App using  <b>React Native-Expo/CLI</b>,<b>Andriod Studio</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Problem solving",
    about: "DSA coding practice at <b>HackerRank</b>  and <b>Leet Code</b> ",
  }
];

export const projects: IProject[] = [
  {
    name: "Notion Clone",
    description:
      `Implemented basic feature and ui of notion.
      feature like- Authentication,Create doc,Publish to Web.
      Real-time Database & Notion-style Editor.
      Infinite Children Documents,Trash Can & Soft Delete.
      `,
    image_path: '/projectImages/notion.png',
    deployed_url: "https://notion-mateshwari.vercel.app/",
    github_url: "https://github.com/mpv33/notion-clone-nextjs",
    category: ["reactJs", "nextJs"],
    key_techs: ["ReactJs", "Tailwind CSS", "NextJs","Clerk","OpenAI","Convex","Edge store"],
  },
  {
    name: "InterviewPro",
    description:
      ` InterviewPro offers high-quality  free technical content on Data Structures and Algorithms (DSA),
      JavaScript, ReactJS, NodeJs, and NextJs, 
     catering to last-minute preparation for the most commonly asked interview questions. 
     Its my personal product.`,
    image_path: '/projectImages/p0.png',
    deployed_url: "https://interviewpro-notes.vercel.app/",
    github_url: "",
    category: ["reactJs", "nextJs"],
    key_techs: ["ReactJs", "Tailwind CSS", "NextJs"],
  },
  {
    name: "Flipkart Clone ",
    description:
      ` Flipkart clone-Basic Feature and UI implementation as
       flipkart lke search product , add to cart,checkout,payment..etc
      `,
    image_path: '/projectImages/flipkart.png',
    deployed_url: "https://flipkart-clone-m.vercel.app/",
    github_url: "https://github.com/mpv33/flipkart-clone-frontend",
    category: ["reactJs", "nodeJs"],
    key_techs: ["ReactJs", "Redux","Material UI", "NodeJs","Mongodb"],
  },
  {
    name: "Yovi Web App",
    description:
      `Client Product-Manage Your Event based on worlwide location. 
      I have meticulously crafted this product from inception to completion.
      `,
    image_path: '/projectImages/p4.png',
    deployed_url: "https://www.findyovi.com/",
    github_url: "",
    category: ["reactJs", "nodeJs"],
    key_techs: ["ReactJs", "Redux", "Tailwind CSS", "NodeJs"],
  },
  {
    name: "Genius-Saas AI ",
    description:
      ` Its saas ai platform & integrated with openai,replicate ai.
      Feature- coversation,image,code,music generation.
      Authentication with Clerk,Stripe monthly subscription
      `,
    image_path: '/projectImages/genius.png',
    deployed_url: "https://genius-code.vercel.app/",
    github_url: "https://github.com/mpv33/Genius-saas-ai-nextjs",
    category: ["reactJs", "nextJs"],
    key_techs: ["ReactJs", "Tailwind CSS", "NextJs","Clerk","OpenAI","Stripe","Mongodb","Crips"],
  },
  {
    name: "Smorgborg Org",
    description:
      `Client Product-
      Smorgborg helps clubs, organizations, and communities get organized and connected: 
      Create Professional Looking Articles and Events, Custom Email,And Much More.
      developed Custom Email Template Editor in ReactJs with the help of ckedittor.
     I have meticulously crafted this product from inception to completion.
      `,
    image_path: '/projectImages/p2.png',
    deployed_url: "https://smorgborg.org/",
    github_url: "",
    category: ["reactJs", "nodeJs"],
    key_techs: ["ReactJs", "Redux", "Custom Email Template Editor", "Tailwind CSS", "NodeJs"],
  },
  {
    name: "Web Portfolio",
    description:
      `Explore my portfolio to see my showcase work and gain insights into
     my technical skill set and expertise. Discover the potential of our 
     collaboration by delving into my projects remotely.`,
    image_path: '/projectImages/p1.png',
    deployed_url: "https://mateshwari.vercel.app/",
    github_url: "https://github.com/mpv33/web-portfolio-nextjs",
    category: ["reactJs", "nextJs"],
    key_techs: ["ReactJs", "Tailwind CSS", "NextJs"],
  },
  {
    name: "FunAcademy",
    description:
      `During my college years, I pursued web development as a creative outlet,
       acquiring skills in HTML, CSS, and JavaScript. What started as a personal endeavor
       has now sparked a passion for making professional contributions in this dynamic field with team members.
      `,
    image_path: '/projectImages/p3.png',
    deployed_url: "https://mpv33.github.io/funacademy_demo/",
    github_url: "https://mpv33.github.io/funacademy_demo/",
    category: ["jS"],
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
];

export const userData = {
  name: 'Mateshwari',
  lastName: 'Verma',
  dp: '/images/mpv.jpg',
  position: 'Full stack developer',
  about: `
  Full Stack Developer with 4+ years of experience, strong in problem-solving, data structures, 
  and algorithms. Proficient in JavaScript with specialization in ReactJs, NextJs. 
  Adept at creating scalable, user-focused web applications. Skilled in Node.js,
   and MongoDB for robust backend development
   `,
  contacts: {
    mobile: '+918853952715',
    email: 'mateshwari33@gmail.com',
    linkedin_url: 'https://www.linkedin.com/in/mateshwari-verma-a41143168/',
    github_url: 'https://github.com/mpv33',
    coding_profile: 'https://www.hackerrank.com/mateshwari33',
    address: 'Balrampur,UP,India'
  },
  defaultTitle: 'Mateshwari Portfolio',
  defaultDescription:
    `Experienced IT Professional with over 3+ years of industry experience,
   specializing in web development and proficient in ReactJs & NodeJs.
    Web/App Development: Proficient in utilizing ReactJs, Redux, Nodejs, NextJs,
     and ReactNative to build robust and scalable applications with innovative solutions.`,
  defaultImageUrl: 'https://mateshwari.vercel.app/images/mpv.jpg',
  siteName: 'Mateshwari Verma Portfolio',
  siteUrl: 'https://mateshwari.vercel.app/',
  defaultAuthor: 'Mateshwari Verma',
}