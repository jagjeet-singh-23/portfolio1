//  icons
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

// skills images
import SkillImg1 from "./assets/img/skills/html.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/javascript.png";
import SkillImg4 from "./assets/img/skills/typescript.png";
import SkillImg5 from "./assets/img/skills/react.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/ja.gjeet4605/",
    color: "text-red-500",
    colorHover: "hover:text-red-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/jagjeet-singh-23",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://in.linkedin.com/in/jagjeet-singh-a21359252?trk=people-guest_people_search-card",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
];

export const sections = [
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express.js, Node.js, and database such as MongoDB",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React, Next, and TypeScript and have experience developing responsive and user-friendly web applications.",
  },
];