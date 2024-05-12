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
  reactdashboard,
  todolist,
  portfolio,
  legacy,
  waterapp,
  feedback,
  threejs,
  unabiz,
  unr,
  iii,
  ncr,
  python,
  splunk,
  postgresql,
  bootstrap,
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
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
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
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Git",
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },

  {
    name: "MongoDB",
    icon: mongodb,
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
      "Boosts code quality and user experience by implementing 24 unit tests, ensuring robust application functionality.",
      "Augments system capabilities by integrating 8 CRUD functionalities via PostgreSQL, optimizing data operations.",
      "Develops web applications to enhance user experience for Nevada System of Higher Education customers.",
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
    date: "Jan 2014 - Jan 2017",
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

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ]

const projects = [
  {
    name: "Dashboard System",
    description:
      "This React 18 and TypeScript project boosts backend systems, focusing on user authentication and performance optimization. It introduces advanced UI, theme customization, and data analytics, streamlining workflows and enhancing user interaction within web applications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "ant-design",
        color: "pink-text-gradient",
      },
      {
        name: "zustand",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
    ],
    image: reactdashboard,
    source_code_link: "https://github.com/green760223/react-dashboard-manager",
    demo_link: "https://react-dashboard-manager.vercel.app/",
  },
  {
    name: "Portfolio Landing Page",
    description:
      "This project uses React, Three.js, Tailwind CSS, and EmailJS, features advanced web development skills with 3D models, animations, and responsive design. It employs React Three Fiber and Framer Motion to showcasing dynamic user experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "three-js",
        color: "pink-text-gradient",
      },
      {
        name: "email-js",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/green760223/react-portfolio-web",
    demo_link: "https://react-portfolio-web.pages.dev/",
  },
  {
    name: "Online To-Do List",
    description:
      "This enhanced React-based to-do list app now includes user registration and account management. It integrates with RESTful APIs, allowing secure user registration and personalized task management. Users can add, delete, edit, and mark tasks as completed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "crud",
        color: "yellow-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/green760223/react-todo-list",
    demo_link: "https://react-todo-list-phi-wheat.vercel.app/",
  },
  {
    name: "React Feedback App",
    description:
      "This web application is a user-friendly platform for managing user feedback on products or services. It features real-time updates and feedback tracking, enhancing user engagement and improving service quality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "json-server",
        color: "yellow-text-gradient",
      },
    ],
    image: feedback,
    source_code_link: "https://github.com/green760223/react-todo-list",
    demo_link: "https://react-todo-list-phi-wheat.vercel.app/",
  },
  {
    name: "Company Landing Page",
    description:
      "This marketing company's website uses HTML, CSS, JavaScript, and Bootstrap for design and animations. It features a CMS, SEO optimization, and interactive forms for user engagement, showcasing their event planning and marketing services effectively.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "animation",
        color: "yellow-text-gradient",
      },
    ],
    image: legacy,
    source_code_link:
      "https://github.com/green760223/legacy-marketing-landing-page",
    demo_link: "https://legacy-taiwan.com/",
  },
  {
    name: "Drinking Water Spot App",
    description:
      "This Android app allowed users to mark free water points using GPS on smartphones, integrated REST APIs developed with Hibernate and the Java. It also utilized open geo-data from Open Street Map to enhance mapping functionality.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "hibernate",
        color: "orange-text-gradient",
      },
      {
        name: "mysql",
        color: "yellow-text-gradient",
      },
    ],
    image: waterapp,
    source_code_link: "https://github.com/green760223/WaterMapAndroidApp",
    demo_link: "",
  },
]

export { services, technologies, experiences, projects }
