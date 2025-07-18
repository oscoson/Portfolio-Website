import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  gradImage,
  chromecast,
  disc02,
  discord,
  linkedin,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  itch,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  github,
  yourlogo,
  DRDC,
  QGDC,
  MetaQuestGaming,
  WorkLife,
} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "About Me",
    url: "#aboutme",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const experience = [
  {
    id: "0",
    title: "Software Development Intern @ DRDC",
    text: "Contributed to various research projects involving LLMs, virtual machines, and simulated cyberattack games. Collaborated as a co-author on a published research paper studying the systematic evaluation of LLMs for cyber operation automation.",
    date: "May 2023 - August 2024",
    status: "done",
    link: "https://www.canada.ca/en/defence-research-development.html",
    imageUrl: DRDC,
    colorful: true,
  },
  {
    id: "1",
    title: "Co-Chair, Community Outreach @ QGDC",
    text: "Managed a community 150+ student game developers. Directed game jams and social events to generate growth and engage game developers. Organized tutorial sessions to teach students about the Unity game engine and C# programming language.",
    date: "June 2022 - August 2023",
    status: "done",
    link: "https://www.qgdc.ca/",
    imageUrl: QGDC,
    colorful: true,
  },
  // {
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  // {
  //   id: "0",
  //   title: "Seamless Integration",
  //   text: collabText,
  // },
  // {
  //   id: "1",
  //   title: "Smart Automation",
  // },
  // {
  //   id: "2",
  //   title: "Top-notch Security",
  // },
];

export const collabApps = [
  {
    id: "0",
    title: "itch",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "github",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "linkedIn",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Computer Science Graduate",
    text: "I graduated with an Honours Bachelor's degree in Computer Science from Queen's University, where I honed my skills in software and game development.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: gradImage,
    light: true,
  },
  {
    id: "1",
    title: "Game Programmer",
    text: "Inspired by the craft of bringing virtual interactivity to life, I've delved into game jams and team projects to program engaging gameplay experiences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: MetaQuestGaming,
    light: true,
  },
  {
    id: "2",
    title: "Software Developer",
    text: "I have experience in developing software in agile environments, having worked as an intern in National Defence and built numerous projects with different teams.  ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: WorkLife,
    light: true,
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: gradImage,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: gradImage,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: gradImage,
  // },
];

export const socials = [
  {
    id: "0",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/osan/",
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: github,
    url: "https://github.com/oscoson",
  },
  {
    id: "2",
    title: "Itch.io",
    iconUrl: itch,
    url: "https://oscosan.itch.io/",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
