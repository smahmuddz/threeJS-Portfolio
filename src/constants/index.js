import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  csedu,
  ewu,
  dcsd,
  sghsc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  }, 
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work Experiance",
  },
  {
    id: "experiance",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Lecturer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: backend,
  },
  {
    title: "Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Lecturer, Department of CSE",
    company_name: "Prime University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - July 2024",
    points: [
      "Designing and delivering lectures on core computer science subjects, focusing on both theoretical concepts and practical applications.",
      "Collaborating with fellow faculty members to develop comprehensive course materials and assessments that meet departmental standards.",
      "Guiding students through hands-on projects and lab sessions to reinforce learning and enhance technical skills.",
      "Providing academic mentorship and support to students, helping them navigate their academic and career goals.",
    ],
  },
  {
    title: "Lecturer, Department of CSE",
    company_name: "University of Skill Enrichment & Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2023 - March 2024",
    points: [
      "Designing and delivering lectures on core computer science subjects, focusing on both theoretical concepts and practical applications.",
      "Collaborating with fellow faculty members to develop comprehensive course materials and assessments that meet departmental standards.",
      "Guiding students through hands-on projects and lab sessions to reinforce learning and enhance technical skills.",
      "Providing academic mentorship and support to students, helping them navigate their academic and career goals.",
    ],
  },
  {
    title: "Graduate Teaching Assistant (GTA)",
    company_name: "East West University",
    icon: ewu,
    iconBg: "#383E56",
    date: "November 2023 - March 2024",
    points: [
      "Assisting students in understanding class topics, guiding them through assignments, and providing necessary information.",
      "Managing make-up examinations and coordinating with students to ensure they are well-informed.",
      "Assisting faculty in lab sessions, helping to facilitate practical learning and student engagement.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant (UTA)",
    company_name: "East West University",
    icon: ewu,
    iconBg: "#383E56",
    date: "July 2022 - October 2023",
    points: [
      "Assisting students in understanding class topics, guiding them through assignments, and providing necessary information.",
      "Managing make-up examinations and coordinating with students to ensure they are well-informed.",
      "Assisting faculty in lab sessions, helping to facilitate practical learning and student engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
    name: "Master Oogway",
    designation: "",
    company: "Kung Fu Panda",
    image: "https://i.pinimg.com/564x/c2/e3/42/c2e34256f55f1e454831b7dab451cfe7.jpg",
  },
  {
    testimonial:
      "We walk away from our dreams afraid we may fail, or worse yet, afraid we may succeed.",
    name: "William Forrester",
    designation: "",
    company: "Finding Forrester",
    image: "https://m.media-amazon.com/images/M/MV5BMTZhOGU3N2UtNTMxNy00N2Q0LWIzNjQtMWZmMjQzZWY5NjI5XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
  },
  {
    testimonial:
      "Wherever There Is Light, There Are Always Shadows.",
    name: "Uchiha Madara",
    designation: "",
    company: "Naruto",
    image: "https://w0.peakpx.com/wallpaper/822/792/HD-wallpaper-madara-uchiha-madara-naruto-uchiha-thumbnail.jpg",
  },
];

const education = [
  {
    title: "University of Dhaka (DU)",
    company_name: "MSc in Computer Science and Engineering",
    icon: csedu,
    iconBg: "#383E56",
    date: "July 2023 - Till to date",
    points: [
      "Currently enrolled in MSc Program of University of Dhaka."
    ],
  },
  {
    title: "East West University (EWU)",
    company_name: "BSc in Computer Science and Engineering",
    icon: ewu,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - Sept 2023",
    points: [
      "Major: Software Engineering.",
      "Published a research paper in International Conference on Intelligent Computing & Optimization (ICICO 2023).",
      "Capstone Project: Sparked: An Interactive Circuit learning app with Simulation.",
    ],
  },
  {
    title: "St. Gregory's High School and College",
    company_name: "Higher Secondary Certificate (HSC) ",
    icon: sghsc,
    iconBg: "#383E56",
    date: "2018",
    points: [
      "Got GPA 5.00 out of 5.00 from Science group.",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    company_name: "Dhaka Collegiate School",
    icon: dcsd,
    iconBg: "#E6DEDD",
    date: "2016",
    points: [
    ],
  },
];


const projects = [
  {
    name: "Music Recommendation system with Multi-dimensional Similarity Analysis",
    description:
      "RecomMuse is a music recommendation system that leverages collaborative filtering and content-based filtering techniques. This project aims to provide personalized music recommendations based on user preferences and listening history.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/smahmuddz/RecomMuse",
  },
  {
    name: "Drone Ground Station for controlling DJI Tello drone",
    description:
      "A Drone ground station, designed to control DJI Tello drone. Using DJITELLOPY. The drone is a Teleoperated Robot (Drone) for Sensing the Toxic Gases in the air and provide the AQI in the ground station.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PYTHON",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/smahmuddz/Drone-Ground-Station",
  },
  {
    name: "Sparked: An Interactive Circuit learning app with Simulation",
    description:
      "Sparked is a real-time chat application built with Node.js and Socket.io. It allows users to create chat rooms, send messages instantly, and see who’s online. The project uses Express.js for the server-side logic and includes a clean, responsive frontend powered by HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "SVELTE",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/smahmuddz/sparked",
  },
];


export { services, technologies, experiences, testimonials,  projects, education };
