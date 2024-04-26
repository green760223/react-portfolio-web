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
  tailwind,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  unabiz,
  unr,
  iii,
  ncr,
  python,
  splunk,
  mysql,
  postgresql,
  aws,
  bootstrap,
  java,
  sigfox,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Support Engineer",
    icon: mobile,
  },
  {
    title: "Splunk Engineer",
    icon: backend,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
]

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
    name: "Python",
    icon: python,
  },
  {
    name: "Splunk",
    icon: splunk,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Sigfox",
    icon: sigfox,
  },
]

const experiences = [
  {
    title: "Student Full Stack Engineer",
    company_name: "College of Engineering at the University of Nevada, Reno",
    icon: unr,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Develop web front-ends to enhance the user experience for customers of the Nevada System of Higher Education.",
      "Boosts project quality by developing custom error handling with SQLAlchemy and Pydantic, adding 24 test cases using Python unittest, launching 8 new CRUD functionalities with PostgreSQL, and optimizing data and operations within CRUD modules, enhancing both performance and user experience.",
    ],
  },
  {
    title: "Support Engineer",
    company_name: "UnaBiz",
    icon: unabiz,
    iconBg: "#ffffff",
    date: "Feb 2018 - May 2022",
    points: [
      "Built Splunk dashboards to monitor 1M+ devices and generated reports for projects status, saving 10 hours per week of manual reporting work.",
      "Monitored 328 base stations by integrating Splunk and Slack to receive real-time alerts and provided 24/7 IoT connectivity services, resulting in a 90% reduction in manual monitoring work.",
      "Developed Python scripts to automate tasks and produce insight reports, thus reducing manual work by 90%.",
      "Implemented an IoT solutions for 2 of the biggest security customers in Taiwan by integrated a Sigfox GPS tracker with Python Flask, MongoDB and LINE Message APIs.",
      "Delivered technical support to customers on cloud platform, hardware, and software issues, as well as product return material authorization (RMA), while successfully resolved over 900 support tickets through the help desk to maintain positive customer relationships.",
      "Introduced Sigfox IoT technology and demonstrated solutions/products to partners and potential customers, while working closely with the sales team to provide technical and business analytical direction.",
    ],
  },
  {
    title: "Professional Services Consultant",
    company_name: "NCR Corporation",
    icon: ncr,
    iconBg: "#ffffff",
    date: "Feb 2017 - Jan 2018",
    points: [
      "Collaborated with NCR Malaysia R&D team to provide on-site support for installing, testing, configuring, integrating servers, and managing databases for 2 transaction solutions.",
      "Implemented technical support and professional consulting services to 3 enterprise clients in the banking industry without missing any calls.",
      "Conducted full system testing with 2 testing events (System Integration Test and User Acceptance Test).",
      "Wrote clear, concise, and thorough specifications with installation guide, user guide, system maintenance and troubleshooting documentation for clients.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Institute for Information Industry",
    icon: iii,
    iconBg: "#ffffff",
    date: "Jan 2014 - Feb 2017",
    points: [
      "Created 50+ RESTful APIs by Hibernate, Java Jersey API Framework, and tested using Swagger.",
      "Collaborated with team to design and develop systems, manage databases, and oversaw 3 IT projects.",
      "Resolved system bugs and security issues by performing troubleshooting techniques and on-site support.",
      "Cooperated with development team in testing websites and mobile apps to ensure bug-free production.",
      "Researched and categorized open APIs of the Bonita Business Process Management engine from the documentation, and collaborated with team members to design and implement BPM Web-Service APIs for internal use.",
      "Provided on-site customer service support and performed troubleshooting techniques to resolve system bugs and security issues",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
