import { Experience } from '@/types';

export const experience: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Developed and maintained multiple web applications using React and Node.js",
      "Implemented RESTful APIs and improved database performance by 40%",
      "Collaborated with cross-functional teams to deliver projects on time"
    ],
    current: true,
  },
  {
    id: 2,
    company: "Digital Agency",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    description: [
      "Built responsive user interfaces for client websites using React and Vue.js",
      "Optimized website performance and improved loading times by 60%",
      "Worked with designers to implement pixel-perfect UI/UX designs"
    ],
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Junior Developer",
    duration: "2019 - 2020",
    description: [
      "Assisted in the development of company's main product",
      "Participated in code reviews and agile development processes",
      "Contributed to testing and debugging efforts"
    ],
  },
];