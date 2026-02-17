// Centralized data for the portfolio

export const projects = [
  {
    id: 1,
    titleEs: "Generador de PDF",
    titleEn: "PDF Generator",
    descriptionEs: "Aplicación web para generar documentos PDF personalizados con formularios dinámicos y vista previa en tiempo real.",
    descriptionEn: "Web application to generate custom PDF documents with dynamic forms and real-time preview.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80&fm=webp",
    tags: ["JavaScript", "HTML", "CSS", "PDF.js"],
    demoUrl: "https://res.cloudinary.com/dlvmueihc/image/upload/Captura_de_pantalla_2026-02-16_195453_y5sajn",
    githubUrl: "https://github.com/Haru-VP/Generador_PDF",
  },
  {
    id: 2,
    titleEs: "Amigo Secreto",
    titleEn: "Secret Friend",
    descriptionEs: "Aplicación interactiva para sorteos de amigo secreto con validación de nombres y gestión de participantes.",
    descriptionEn: "Interactive application for secret friend draws with name validation and participant management.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80&fm=webp",
    tags: ["JavaScript", "HTML", "CSS", "DOM"],
    demoUrl: "https://res.cloudinary.com/dlvmueihc/image/upload/Captura_de_pantalla_2026-02-16_193718_j81o0l",
    githubUrl: "https://github.com/Haru-VP/engeAmigoSecreto",
  },
  {
    id: 3,
    titleEs: "Sistema de Reconocimiento Facial",
    titleEn: "Facial Recognition System",
    descriptionEs: "Proyecto de tesis: Sistema de visión por computadora con reconocimiento facial usando Python, OpenCV y TensorFlow, integrado con mini robot. El resto del código es privado porque todavía está en desarrollo.",
    descriptionEn: "Thesis project: Computer vision system with facial recognition using Python, OpenCV and TensorFlow, integrated with mini robot. The full code is private as it is still under development.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&fm=webp",
    tags: ["Python", "OpenCV", "TensorFlow", "Robotics"],
    demoUrl: "https://github.com/Haru-VP/TensorFlow",
    githubUrl: "https://github.com/Haru-VP/TensorFlow",
  },
];

export const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "Docker", level: 75 },
  { name: "OpenCV/TensorFlow", level: 80 },
  { name: "AWS S3", level: 75 },
  { name: "Git/GitHub", level: 90 },
];

export const education = [
  {
    degreeKey: "aboutDegree1",
    institutionKey: "aboutInstitution1",
    descKey: "aboutDesc1",
    year: "08/2022 - 12/2025",
  },
  {
    degreeKey: "aboutDegree2",
    institutionKey: "aboutInstitution2",
    descKey: "aboutDesc2",
    year: "07/2022 - 12/2022",
  },
  {
    degreeKey: "aboutDegree3",
    institutionKey: "aboutInstitution3",
    descKey: "aboutDesc3",
    year: "2024 - 2025",
  },
];

export const interests = [
  {
    icon: "💼",
    titleKey: "aboutInterest1",
    descKey: "aboutInterest1Desc",
  },
  {
    icon: "👁️",
    titleKey: "aboutInterest2",
    descKey: "aboutInterest2Desc",
  },
  {
    icon: "☁️",
    titleKey: "aboutInterest3",
    descKey: "aboutInterest3Desc",
  },
  {
    icon: "🚀",
    titleKey: "aboutInterest4",
    descKey: "aboutInterest4Desc",
  },
];

export const contactInfo = [
  {
    icon: "📧",
    labelKey: "contactEmail",
    value: "dev.anyeli.pinto@gmail.com",
    link: null,
  },
  {
    icon: "📱",
    labelKey: "contactPhone",
    value: "+57 304 283 6130",
    link: null,
  },
  {
    icon: "📍",
    labelKey: "contactLocation",
    value: "Pasto, Nariño, Colombia",
    link: null,
  },
];

export const socialLinks = [
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/Haru-VP",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/anyelipinto/",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    url: "https://w.app/xiobzu",
  },
];
