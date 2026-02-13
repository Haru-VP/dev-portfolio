// Centralized data for the portfolio

export const projects = [
  {
    id: 1,
    titleEs: "Generador de PDF",
    titleEn: "PDF Generator",
    descriptionEs: "Aplicación web para generar documentos PDF personalizados con formularios dinámicos y vista previa en tiempo real.",
    descriptionEn: "Web application to generate custom PDF documents with dynamic forms and real-time preview.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["JavaScript", "HTML", "CSS", "PDF.js"],
    demoUrl: "https://haru-vp.github.io/Generador_PDF/",
    githubUrl: "https://github.com/Haru-VP/Generador_PDF",
  },
  {
    id: 2,
    titleEs: "Amigo Secreto",
    titleEn: "Secret Friend",
    descriptionEs: "Aplicación interactiva para sorteos de amigo secreto con validación de nombres y gestión de participantes.",
    descriptionEn: "Interactive application for secret friend draws with name validation and participant management.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    demoUrl: "https://haru-vp.github.io/ChallengeAmigoSecreto/",
    githubUrl: "https://github.com/Haru-VP/ChallengeAmigoSecreto",
  },
  {
    id: 3,
    titleEs: "Generador de Portafolios",
    titleEn: "Portfolio Generator",
    descriptionEs: "Herramienta para crear portafolios personalizados con plantillas prediseñadas y exportación a código.",
    descriptionEn: "Tool to create custom portfolios with pre-designed templates and code export.",
    image: "https://images.unsplash.com/photo-1573495611823-5397efa4fac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    titleEs: "Dashboard Meteorológico",
    titleEn: "Weather Dashboard",
    descriptionEs: "Dashboard meteorológico con visualización de datos en tiempo real y predicciones de 7 días.",
    descriptionEn: "Weather dashboard with real-time data visualization and 7-day forecasts.",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["Vue.js", "Chart.js", "API REST"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    titleEs: "Analítica de Redes Sociales",
    titleEn: "Social Media Analytics",
    descriptionEs: "Herramienta de análisis de redes sociales con métricas detalladas y reportes personalizados.",
    descriptionEn: "Social media analytics tool with detailed metrics and custom reports.",
    image: "https://images.unsplash.com/photo-1762242298589-582f5f6c3fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["React", "D3.js", "Express", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    titleEs: "Rastreador de Fitness",
    titleEn: "Fitness Tracker",
    descriptionEs: "Aplicación móvil para seguimiento de ejercicios, nutrición y progreso personal.",
    descriptionEn: "Mobile app for tracking workouts, nutrition and personal progress.",
    image: "https://images.unsplash.com/photo-1653053151840-a35f2002a2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80",
    tags: ["React Native", "Redux", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Node.js/Express", level: 85 },
  { name: "Python", level: 80 },
  { name: "SQL/NoSQL", level: 85 },
  { name: "Git/GitHub", level: 90 },
];

export const education = [
  {
    degreeKey: "aboutDegree1",
    institutionKey: "aboutInstitution1",
    descKey: "aboutDesc1",
    year: "2020 - 2024",
  },
  {
    degreeKey: "aboutDegree2",
    institutionKey: "aboutInstitution2",
    descKey: "aboutDesc2",
    year: "2023",
  },
  {
    degreeKey: "aboutDegree3",
    institutionKey: "aboutInstitution3",
    descKey: "aboutDesc3",
    year: "2024",
  },
];

export const interests = [
  {
    icon: "💻",
    titleKey: "aboutInterest1",
    descKey: "aboutInterest1Desc",
  },
  {
    icon: "📚",
    titleKey: "aboutInterest2",
    descKey: "aboutInterest2Desc",
  },
  {
    icon: "☕",
    titleKey: "aboutInterest3",
    descKey: "aboutInterest3Desc",
  },
  {
    icon: "🎵",
    titleKey: "aboutInterest4",
    descKey: "aboutInterest4Desc",
  },
];

export const contactInfo = [
  {
    icon: "📧",
    labelKey: "contactEmail",
    value: "tu.email@ejemplo.com",
    link: "mailto:tu.email@ejemplo.com",
  },
  {
    icon: "📱",
    labelKey: "contactPhone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: "📍",
    labelKey: "contactLocation",
    value: "Ciudad, País",
    link: null,
  },
];

export const socialLinks = [
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/tuusuario",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/tuusuario",
  },
  {
    icon: "twitter",
    label: "Twitter",
    url: "https://twitter.com/tuusuario",
  },
];
