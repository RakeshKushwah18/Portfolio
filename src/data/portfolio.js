// ============================================================================
// PORTFOLIO DATA — Editable content for the entire site.
// ============================================================================

export const profile = {
  name: 'Rakesh Kushwah',
  firstName: 'Rakesh',
  lastName: 'Kushwah',
  initials: 'RK',
  role: 'Frontend & MERN Stack Developer',
  tagline: 'Building digital experiences that actually work.',
  subtitle:
    'Frontend & MERN Stack Developer focused on building scalable, responsive and user-focused web applications with React, Next.js and modern JavaScript.',
  location: 'India',
  available: true,
  resumeUrl: '/public/resume.pdf',
  email: 'rakeshkushwah1898@gmail.com',
  socials: {
    github: 'https://github.com/RakeshKushwah18',
    linkedin: 'https://www.linkedin.com/in/rakesh-kushwah/',
    email: 'rakeshkushwah1898@gmail.com',
  },
  heroMeta: [
    { code: '01', label: 'FRONTEND' },
    { code: '02', label: 'MERN' },
    { code: '03', label: 'NEXT.JS' },
  ],
};

export const navLinks = [
  { label: 'Home', path: '/#home' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Experience', path: '/#experience' },
  { label: 'Skills', path: '/#skills' },
  { label: 'Education', path: '/#education' },
  { label: 'Certifications', path: '/#certifications' },
  { label: 'Contact', path: '/#contact' },
];


// ============================================================================
// CERTIFICATIONS  Certifications
// ============================================================================
export const certifications = [
  {
    id: 'sheryians-cohort',
    title: 'Full Stack Web Development & DevOps Engineering',
    issuer: 'Sheryians Coding School',
    date: '2025',
    credentialUrl: 'https://drive.google.com/file/d/13HENGlY2eSW4S4XYIg0QbG94hLyvMcdp/view?usp=drive_link',
    skills: ['Frontend', 'Backend', 'DevOps', 'DSA', 'Docker', 'CI/CD'],
    status: 'Verified',
  },
  {
  id: 'sheryians-hackathon',
  title: 'Frontend Development Hackathon — AI Edition',
  issuer: 'Sheryians Coding School',
  date: '2025',
  credentialUrl: 'https://drive.google.com/file/d/1YVDmGDuDUFp-EnqJuF-rpm7axVrRECg8/view?usp=sharing',
  skills: ['Frontend Architecture', 'AI Integration', 'Rapid Prototyping', 'UI/UX', 'React.js'],
  status: 'Verified',
  },
  {
  id: 'infosys-networking',
  title: 'Professional Networking & Strategic Communication',
  issuer: 'Infosys Springboard',
  date: '2024',
  credentialUrl: 'https://drive.google.com/file/d/155pcwqQ6Rf1QpMkZbh7F_w8lwRUin_7w/view?usp=drive_link',
  skills: ['Corporate Communication', 'Professional Networking', 'Soft Skills', 'Collaboration', 'Interpersonal Skills'],
  status: 'Verified',
  },
  {
  id: 'infosys-html5',
  title: 'Modern HTML5 & Web Semantics Architecture',
  issuer: 'Infosys Springboard',
  date: '2024',
  credentialUrl: 'https://drive.google.com/file/d/11Z09AbFYmhN_THQR3OGuWFZ32RUhx9rq/view?usp=sharing ',
  skills: ['HTML5', 'Semantic Web', 'Web Accessibility (a11y)', 'SEO Basics', 'DOM Structure'],
  status: 'Verified',
  },
];

// ============================================================================
// ABOUT
// ============================================================================

export const about = {
  label: '01 — ABOUT',
  heading: 'I build with purpose, not just components.',
  paragraphs: [
    "I'm a B.Tech Computer Science & Engineering graduate focused on modern web development. I build real-world applications with React, Next.js, TypeScript and the MERN stack — not demos.",
    'My approach is simple: responsive UI first, performance always, and clean code that real teams can maintain. I use AI-assisted development to move faster without sacrificing quality.',
  ],
  stats: [
    { label: 'B.Tech CSE', value: 'CS & E' },
    { label: 'Focus', value: 'Frontend' },
    { label: 'Stack', value: 'MERN' },
    { label: 'Projects', value: 'Real-world' },
  ],
};

// ============================================================================
// SKILLS
// ============================================================================

export const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'TbBrandHtml5' },
      { name: 'CSS', icon: 'TbBrandCss3' },
      { name: 'JavaScript', icon: 'TbBrandJavascript' },
      { name: 'React', icon: 'TbBrandReact' },
      { name: 'Next.js', icon: 'TbBrandNextjs' },
      { name: 'TypeScript', icon: 'TbBrandTypescript' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Tailwind CSS', icon: 'TbBrandTailwind' },
      { name: 'Responsive Design', icon: 'TbDeviceMobile' },
      { name: 'UI/UX', icon: 'TbPalette' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'TbBrandNode' },
      { name: 'Express.js', icon: 'TbApi' },
      { name: 'REST APIs', icon: 'TbPlug' },
      // { name: 'MongoDB', icon: 'TbDatabase' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'TbBrandGit' },
      { name: 'GitHub', icon: 'TbBrandGithub' },
      { name: 'VS Code', icon: 'TbCode' },
      { name: 'AI-assisted Dev', icon: 'TbRobot' },
    ],
  },
];

// ============================================================================
// PROJECTS
// ============================================================================

export const projects = [
  {
    slug: 'kra-calculator',
    title: 'KRA Calculator',
    category: 'Web Tool',
    size: 'large',
    tagline: 'A practical web tool designed to help counsellors calculate KRA accurately and quickly.',
    description: 'A practical web tool designed to help counsellors calculate KRA accurately and quickly. Built with a clean interface and real usability in mind.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/RakeshKushwah18/daily-kra-calculator',
    demo: 'https://daily-kra.vercel.app/',
    caseStudy: true,
    problem: 'Counsellors needed a reliable way to calculate KRA scores without manual spreadsheet errors. The existing process was slow and error-prone.',
    solution: 'A focused single-page web tool that automates the KRA calculation pipeline with clear inputs, instant results, and a clean print-friendly output.',
    features: [
      'Automated KRA score calculation',
      'Clean, intuitive input flow',
      'Instant result generation',
      'Print-friendly output format',
      'Responsive across devices',
    ],
    challenges: 'Mapping the real-world KRA formula into a user-friendly interface without overwhelming non-technical users.',
    learned: 'Designing for non-technical users taught me to prioritise clarity over complexity — every input field needed a clear purpose.',
  },
  // {
  //   slug: 'clientflow-dashboard',
  //   title: 'ClientFlow Dashboard',
  //   category: 'Dashboard',
  //   size: 'medium',
  //   tagline: 'A client management dashboard for tracking interactions, tasks, and project status.',
  //   description: 'A client management dashboard with real-time status tracking, task management, and a clean admin interface.',
  //   image: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1200',
  //   tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  //   github: 'https://github.com/adityasharma/clientflow',
  //   demo: '#',
  //   caseStudy: true,
  //   problem: 'Small teams needed a lightweight way to track client interactions and project progress without heavy CRM tools.',
  //   solution: 'A MERN-stack dashboard with task tracking, client profiles, and status pipelines — built to be fast and simple.',
  //   features: [
  //     'Client profile management',
  //     'Task tracking with status pipelines',
  //     'Dashboard analytics overview',
  //     'REST API backend with Express',
  //     'MongoDB data persistence',
  //   ],
  //   challenges: 'Designing a data model that was flexible enough for different team workflows while staying simple to query.',
  //   learned: 'Building a full MERN app end-to-end taught me how to structure APIs that the frontend actually enjoys consuming.',
  // },
  {
  slug: 'gallery-infinite-scrolling',
  title: 'Infinite Scroll Gallery',
  category: 'Web Tool',
  size: 'medium',
  tagline: 'A responsive image gallery featuring seamless infinite scrolling and dynamic API integration.',
  description: 'An interactive image gallery web application featuring dynamic infinite scrolling, real-time image loading, and responsive grid layouts using Unsplash API.',
  image: 'https://images.unsplash.com/photo-1602329568584-03c2d2c19c2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxnYWxsZXJ5JTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
  tech: ['React.js', 'JavaScript', 'Axios API', 'Tailwind CSS'],
  github: 'https://github.com/RakeshKushwah18/Gallery-Project-Done-with-React',
  demo: 'https://gallery-infinite-scrolling.vercel.app/',
  caseStudy: true,
  problem: 'Traditional pagination interrupts the browsing flow and degrades user experience in image-heavy media platforms.',
  solution: 'Engineered a lightweight React gallery with automated infinite scrolling logic and Axios API fetching for smooth, continuous image loading on user scroll.',
  features: [
    'Infinite scrolling dynamic image loader',
    'Real-time third-party REST API integration',
    'Optimized data fetching with Axios',
    'Fully responsive Tailwind grid layout',
    'Debounce/Scroll listener performance optimization',
  ],
  challenges: 'Handling smooth scroll events without triggering multiple duplicate API requests simultaneously during rapid user scrolling.',
  learned: 'Mastered window scroll event listeners, pagination state handling in React, and API response caching to prevent unnecessary network overhead.',
},
  {
    slug: 'stylehub',
    title: 'StyleHub',
    category: 'E-commerce',
    size: 'medium',
    tagline: 'A modern e-commerce storefront with product browsing, cart, and clean UX.',
    description: 'A modern e-commerce frontend with product browsing, cart functionality, and a polished shopping experience.',
    image: 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['React', 'Tailwind CSS', 'JavaScript','email.js'],
    github: 'https://github.com/RakeshKushwah18/Style-Hub',
    demo: 'https://style-hub-indol.vercel.app?_vercel_share=FY68N3W8Ja9DXUCrgUSJ83ZkdZiTsQ4G',
    caseStudy: true,
    problem: 'Building a fast, responsive e-commerce frontend that felt premium without a heavy framework.',
    solution: 'A React + Tailwind storefront with product filtering, cart state management, and a mobile-first responsive layout.',
    features: [
      'Product catalog with filtering',
      'Cart state management',
      'Responsive mobile-first design',
      'Product detail pages',
      'Clean checkout flow UI',
    ],
    challenges: 'Managing cart state across page navigations without a global state library — used Context API effectively.',
    learned: 'Context API is powerful for cart state when structured well. Learned to avoid unnecessary re-renders with proper memoization. "Implemented EmailJS to handle contact form submissions directly from the frontend, allowing users to send emails without needing a dedicated backend server."',
  },
  {
    slug: 'mobile-repair-website',
    title: 'Mobile Repairing Website',
    category: 'Business Website',
    size: 'small',
    tagline: 'A business website for a mobile repair service with booking and service info.',
    description: 'A responsive business website for a mobile repair service with service listings and contact flow.',
    image: 'https://images.pexels.com/photos/6347926/pexels-photo-6347926.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tech: ['Rect.js', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/RakeshKushwah18/shreeganeshdigitalworld',
    demo: 'https://shreeganeshdigitalworld-dcag5dkxd-rakeshkushwah18s-projects.vercel.app/',
    caseStudy: false,
    problem: 'A local mobile repair business needed an online presence with clear service information.',
    solution: 'A clean, responsive landing page with service listings, pricing, and a contact form.',
    features: [
      'Service listing page',
      'Contact form',
      'Responsive layout',
      'SEO-friendly structure',
    ],
    challenges: 'Building a fast-loading site with vanilla HTML/CSS/JS while keeping the design modern.',
    learned: 'Sometimes the simplest stack is the right one. Learned to build modern UIs without React when the project calls for it. ',
  },
];

// ============================================================================
// EXPERIENCE — Editable entries. Only real information.
// ============================================================================

export const experience = [
  {
    role: 'Frontend Developer',
    org: 'Personal / Freelance & Open Projects',
    duration: '2024 — Present',
    description: 'Building responsive, production-ready web applications and interactive user interfaces using React.js, Next.js, TypeScript, and modern JavaScript, with a focus on performance, usability, and real-world business requirements.',
    responsibilities: [
      'Developing responsive, pixel-perfect and user-friendly interfaces based on modern UI/UX designs and requirements.',
      'Building reusable and modular React components to keep applications maintainable, scalable, and consistent.',
      'Integrating RESTful APIs and asynchronous data flows to build dynamic, interactive web applications.',
      'Using Next.js App Router, client/server components, dynamic routing, layouts, and modern rendering approaches for production-ready applications.',
      'Writing type-safe, maintainable code with TypeScript and applying modern JavaScript concepts across frontend applications.',
      'Creating responsive and accessible interfaces using Tailwind CSS, with reusable UI patterns and component-based development.',
      'Implementing practical frontend features such as forms, validation, search, filtering, pagination/infinite scrolling, authentication flows, and loading/error states.',
      'Using Git/GitHub, browser DevTools, API testing, and debugging workflows to develop, test, troubleshoot, and manage projects effectively.',
      'Applying frontend performance practices such as lazy loading, code splitting, optimized assets, and efficient rendering to improve user experience.',
      'Leveraging AI-assisted development and prompt engineering to accelerate development, debugging, documentation, and problem-solving while maintaining understanding and control over the code.',
      'Ensuring cross-browser compatibility, mobile responsiveness, semantic HTML5, and clean CSS architecture across different screen sizes.',
    ],
    current: true,
  },
  {
    role: 'Gig Counsellor | Student Success & Academic Counselling',
    org: 'Physics Wallah Ltd (PW)',
    duration: '2024 — Present',
    description: 'Working with students and learners across competitive and professional education categories, helping them choose suitable learning programs based on their academic goals, career plans, and individual requirements.',
    responsibilities: [
      'Handling high-volume leads through CRM or NPF/LSQ, maintaining follow-ups and managing the complete counselling cycle.',
      'Developed strong communication, active listening, negotiation and objection-handling skills through daily student interactions.',
      'Counselling students and parents through one-to-one consultations, understanding their requirements and recommending suitable learning paths.',
      'Understanding students requirements and providing personalized, solution-oriented guidance based on their individual needs and concerns.',
      'Coordinating with students, parents, mentors and internal teams to resolve queries and ensure a smooth learner experience.',
      'Consistently ranking among the Top 3 performers every month by analyzing conversations, follow-ups, sales, and conversion performance to repeatedly exceed performance targets.',
      'Gained practical experience in customer behavior, sales psychology, requirement analysis, problem-solving and relationship management.',
      'Working independently in a remote environment while maintaining productivity, follow-up discipline and performance consistency.',
      'Collaborating effectively with team members and internal teams while working in a remote environment, maintaining strong productivity, follow-up discipline, and performance consistency.',
    ],
    current: true,
  },
];

// ============================================================================
// EDUCATION
// ============================================================================

export const education = {
  label: '05 — EDUCATION',
  heading: 'Education',
  degree: 'B.Tech — Computer Science & Engineering',
  institution: 'Astral Institute of Technology and Research, Indore (R.G.P.V)',
  duration: 'Completed',
  description: 'Formal education in computer science fundamentals, data structures, algorithms, and software engineering principles.',
};

// ============================================================================
// JOURNEY — Learning progression
// ============================================================================

export const journey = [
  { stage: 'HTML / CSS', desc: 'Started with the fundamentals of web structure and styling.' },
  { stage: 'JavaScript', desc: 'Learned interactivity, DOM manipulation, and async patterns.' },
  { stage: 'React', desc: 'Component-based architecture, hooks, and state management.' },
  { stage: 'TypeScript', desc: 'Type safety, interfaces, and scalable code structure.' },
  { stage: 'Next.js', desc: 'SSR, SSG, routing, and production-grade React applications.' },
  { stage: 'MERN Stack', desc: 'Full-stack development with  Express, React, Node.' }, /*MongoDB,*/
  { stage: 'Real-world Projects', desc: 'Built and shipped applications solving actual problems.' },
  { stage: 'Web3 / Blockchain', desc: 'Future focus — exploring decentralized applications.' },
];

// ============================================================================
// CONTACT
// ============================================================================

export const contact = {
  heading: "Let's build something worth shipping.",
  subtitle: 'Open to frontend, React, Next.js and MERN opportunities, freelance projects and interesting technical challenges.',
  email: 'rakeshkushwah1898@gmail.com',
  socials: {
    github: 'https://github.com/RakeshKushwah18',
    linkedin: 'https://www.linkedin.com/in/rakesh-kushwah/',
  },
};

export const footerLinks = {
  social: [
    { label: 'GitHub', url: 'https://github.com/RakeshKushwah18', icon: 'TbBrandGithub' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rakesh-kushwah/', icon: 'TbBrandLinkedin' },
    { label: 'Email', url: 'mailto:rakeshkushwah1898@gmail.com', icon: 'TbMail' },
  ],
};
