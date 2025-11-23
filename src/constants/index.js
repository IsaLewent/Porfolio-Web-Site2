// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },

];
export const projects = [
  {
    id: 1,
    name: "My First Portfolio Web-Site",
    description:
      "A modern, 3D-enabled landing page designed for the 'Just Coder' email service for developers. The project was implemented with a dynamic and interactive sharing using pure HTML, CSS, and JavaScript.",
    href: "",
    image: "/assets/projects/first-portfolio.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Html" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
  {
    id: 2,
    name: "My Second Porfolio Web-Site",
    description:
      "My personal portfolio site with a futuristic space theme, developed using React + Vite and Tailwind CSS. I combined the 'Astronaut' 3D object, modeled in Blender, with JavaScript to create a dynamic 'hero' area.",
    href: "",
    image: "/assets/projects/Second-portfolio.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Three.js" },
    ],
  },
  {
    id: 3,
    name: "My Third Portfolio Web-Site",
    description:
      "A minimalist portfolio site focused on premium brands, coded with React + Vite and Tailwind CSS. At the heart of the design is a custom 3D planet model created in Blender, integrated with JavaScript.",
    href: "",
    image: "/assets/projects/third-portfolio.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Three.js" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/isalewent/" },

  { name: "LinkedIn", href: "https://tr.linkedin.com/" },
  { name: "GitHub", href: "https://github.com/IsaLewent" },
];
