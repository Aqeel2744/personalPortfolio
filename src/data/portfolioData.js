

export const profile = {
  name: 'Aqeel Ahmed Sheikh',
  firstName: 'Aqeel',
  role: 'Web Developer',
  tagline: 'I build fast, full-stack web apps — from database to deploy.',
  description:
    'A web developer who enjoys turning ideas into working products. Comfortable across the full stack — React and Next.js on the front end, Node.js and Express on the back end, with MySQL, MongoDB and Redis handling data. I lean on modern AI tooling to move faster without cutting corners on quality.',
  contactNo: '03136123414',
  location: 'Pakistan',
  resumeUrl: '#', // TODO: replace with a link to your hosted resume/CV PDF
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/aqeel-sheikh-9a0360333?utm_source=share_via&utm_content=profile&utm_medium=member_ios', // TODO: replace with your LinkedIn URL
  },
}

// Core stack skills — grouped for the "tech stack" section
export const skillGroups = [
  {
    label: 'Languages & Markup',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', , 'Redux', 'Axios' , 'three.js', 'GSAP', 'Lenis'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB', 'Firebase', 'Redis'],
  },
]

export const toolItems = [
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'Version Control' },
  { name: 'VS Code', category: 'Editor' },
  { name: 'Antigravity', category: 'AI IDE' },
  { name: 'Stitch', category: 'AI Design' },
  { name: 'Claude', category: 'AI Assistant' },
  { name: 'OpenAI', category: 'AI Assistant' },
  { name: 'ThunderClient', category: 'Api Testing' },
  { name: 'Postman', category: 'Api Testing' },
  { name: 'Framer motion', category: 'Animation' },
  { name: 'MS office', category: 'Productivity' },
  { name: 'Auth0', category: 'Authentication' },
]




export const experience = [
  {
    role: 'Frontend web developer / Web Development',
    company: 'Microsoft Pakistan-internship',
    period: 'july 2025 — Aug 2025',
    summary:
      'Completed a frontend web development internship, where I built responsive and interactive user interfaces using HTML, JavaScript, and Tailwind CSS. Developed reusable UI components, implemented modern responsive layouts, optimized website performance, and collaborated on creating user-friendly web applications following industry best practices.',
    stack: ['HTML', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    stack: ['HTML', 'JavaScript', 'Tailwind CSS'],
    certificates: [
      { name: 'Completion Certificate', url: 'assets/certificates/certificate4.jpg' },
    ],
  },
  {
    role: 'Django Developer / Python development',
    company: 'CodexCue Software Solutions-internship',
    period: 'Aug 2024 — Sept 2024',
    summary:
      'Completed a Python development internship, where I built dynamic web applications, designed and integrated MySQL databases, developed RESTful functionality, implemented CRUD operations, and followed the MVC architecture. Collaborated on backend development tasks, optimized database queries, and gained hands-on experience in building secure and scalable web applications.',
    stack: ['Django', 'Python', 'MySQL'],
    certificates: [
      // This is an example of an internship with two certificates:
      { name: 'Completion Certificate', url: 'assets/certificates/certificate2.jpg' },
      { name: 'Recommendation Letter', url: 'assets/certificates/certificate3.jpg' },
    ],
  },
  {
    role: 'website developer / Website Development',
    company: 'BehinDev-intership',
    period: 'Jan 2023 — Feb 2023',
    summary:
      'Developed responsive and modern web applications using the MERN stack, building both frontend interfaces and backend APIs. Collaborated with the development team to implement new features, optimize application performance, integrate databases, and deliver scalable, user-friendly solutions while following industry best practices.',
    stack: ['React', 'Node.js', 'MongoDB'],
    certificates: [
      { name: 'Completion Certificate', url: 'assets/certificates/certificate1.jpg' },
    ],
  },
]

//project section
export const projects = [
  {
    title: 'AidALign-charityApp',
    description:
      'A full-stack MERN charity platform that connects donors with people and organizations in need. Users can donate money, blood, and essential items, while NGOs and shelters can manage donation requests through an intuitive and responsive web interface.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: 'assets/projects/proj1.png', // e.g. '/projects/project-one.png'
    links: {
      demo: 'https://aid-align-charity-app-95qq.vercel.app/', // e.g. 'https://your-demo-link.com'
      github: 'https://github.com/Aqeel2744/AidAlign-charityApp', // e.g. 'https://github.com/you/project-one'
    },
    featured: true,
  },
  {
    title: 'Ai Trip Planner',
    description:
      'An AI-powered trip planning platform built with the MERN stack that helps users create personalized travel itineraries. It includes user authentication, AI-generated travel plans, destination recommendations, trip management, and a responsive modern UI for seamless travel planning.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Gemini AI'],
    image: 'assets/projects/proj2.png',
    links: {
      demo: 'https://ai-tripplanner-five.vercel.app',
      github: 'https://github.com/Aqeel2744/AiTripPlanner',
    },
    featured: true,
  },
  {
    title: 'MORPH Studio',
    description:
      'Morph Studio 3D is a futuristic web experience built with Three.js, GSAP ScrollTrigger, and Lenis, featuring immersive 3D animations, interactive WebGL scenes, smooth scroll-driven transitions, a dynamic particle background, and a real-time customization studio for experimenting with shapes, materials, and animation effects.',
    stack: ['Three.js', 'GSAP', 'Lenis', 'React', 'Tailwind CSS'],
    image: 'assests/projects/proj3.png', // e.g. '/projects/project-one.png'
    links: {
      demo: 'https://morph-studio-uwdv.vercel.app',
        github: 'https://github.com/Aqeel2744/MorphStudio',
    },
    featured: true,
  },

]



export const formspreeEndpoint = 'https://formspree.io/f/meeywkka'
