// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Your business deserves a fast, visually engaging, and future-proof user interface. I build modern web experiences with clean component architecture, responsive layouts, and smooth interactions—ensuring clarity and performance across every screen.",
    items: [
      {
        title: "UI Engineering",
        description:
          "(Component Architecture, Reusable Patterns, Design Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Responsive Design",
        description:
          "(Mobile-first Layouts, Accessibility, Cross-browser Consistency)",
      },
    ],
  },
  {
    title: "Performance & Experience",
    description:
      "Users expect speed and fluid interaction. I optimize rendering, reduce bundle sizes, and create seamless animations so interfaces feel fast, intuitive, and enjoyable on every device.",
    items: [
      {
        title: "Performance Optimization",
        description: "(Lazy Loading, Code Splitting, Lighthouse 90+ Scores)",
      },
      {
        title: "UX Enhancements",
        description: "(Animations, Micro-interactions, Smooth Navigation)",
      },
      {
        title: "State Management",
        description: "(Context API, Redux, Scalable State Patterns)",
      },
    ],
  },
  {
    title: "Accessibility & SEO",
    description:
      "Great interfaces are inclusive and discoverable. I implement accessibility standards and technical SEO foundations to ensure your application reaches more users and performs well in search results.",
    items: [
      {
        title: "Accessibility",
        description: "(ARIA Standards, Semantic HTML, Inclusive Design)",
      },
      {
        title: "Technical SEO",
        description: "(Metadata, Structured Data, Performance-friendly Markup)",
      },
      {
        title: "Code Quality",
        description: "(Refactoring, Maintainable Structure, Clean Components)",
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
    disabled: true,
    image: "/assets/projects/first-portfolio.webp",
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
    href: "https://isa-portfolio-2.vercel.app/",
    disabled: false,
    image: "/assets/projects/Second-portfolio.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS - Gsap" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "React/Three-Fiber" },
      { id: 5, name: "React/Three-Drei" },
      { id: 6, name: "Blender" },
    ],
  },
  {
    id: 3,
    name: "My Third Portfolio Web-Site",
    description:
      "A minimalist portfolio site focused on premium brands, coded with React + Vite and Tailwind CSS. At the heart of the design is a custom 3D planet model created in Blender, integrated with JavaScript.",
    href: "https://isa-portfolio-bay.vercel.app/",
    disabled: false,
    image: "/assets/projects/third-portfolio.webp",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS - Gsap" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "React/Three-Fiber" },
      { id: 5, name: "React/Three-Drei" },
      { id: 6, name: "Blender" },
    ],
  },
  {
    id: 4,
    name: "Mia-Room-Folio",
    description: "An interactive, cozy 3D isometric web portfolio. Features a custom room modeled and texture-baked in Blender, brought to life with Three.js and Vanilla JavaScript. The design blends 90s retro arcade aesthetics with smooth GSAP animations and a modern Neo-Brutalism UI.",
    href: "https://mia-room-folio.vercel.app/",
    disabled: false,
    image: "/assets/projects/mia-room-folio.webp.webp",
    frameworks: [
      { id: 1, name: "Vanilla JavaScript" },
      { id: 2, name: "Three.js (WebGL)" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "HTML & CSS" },
      { id: 5, name: "Blender" },
      { id: 6, name: "Vite" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/isalewent/" },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/isa-levent-7b6a41394/",
  },
  { name: "GitHub", href: "https://github.com/IsaLewent" },
];
