import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

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
    title: "Competitive Coder",
    about: "DSA coding practice at <b>HackerRank</b>  and <b>Leet Code</b> ",
  }
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "Web Portfolio",
    description:
      "This app shows your showcase work and project details remotly with technical skill set and expertise",
    image_path: "/images/covid.jpg",
    deployed_url: "https://mateshwari.vercel.app/",
    github_url: "https://github.com/mpv33/web-portfolio-nextjs",
    category: ["reactJs", "nextJs", "reactNative"],
    key_techs: ["React", "Chart.js", "Material UI"],
  }
];

export const userData = {
  name: 'Mateshwari',
  lastName:'Verma',
  position: 'Software Engineer-MERN',
  about: `
   Experienced IT Professional with over 3+ years of industry experience, specializing in web development and proficient in  ReactJs & NodeJs. <br />
   <b> Web/App Development: </b> Proficient in utilizing ReactJs, Redux, Nodejs, NextJs, and ReactNative to build robust and scalable applications with innovative solutions.
   <br />
   <br />
   <b>  Present :</b> Software Engineer-II at Slate AI Technologies, Bangalore, India.
   <br />
   <b> Education : </b>  B.Tech (CSE) from SR Institute of management and technology Lucknow.
   `,
  contacts: {
    mobile: '+918853952715',
    email: 'mateshwari33@gmail.com',
    linkedin_url: 'https://www.linkedin.com/in/mateshwari-verma-a41143168/',
    github_url: 'https://github.com/mpv33',
    coding_profile: 'https://www.hackerrank.com/mateshwari33',
    address:'Balrampur,UP,India'
  }
}