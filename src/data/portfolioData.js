// src/data/portfolio.js
import { Code2, Layout, Database, Terminal } from 'lucide-react';

export const personalData = {
  name: "Miguel Alejandro Paredes", //
  title: "Analista Programador Universitario", //
  subtitle: "Desarrollador Web FullStack", //
  email: "paredes94miguel@gmail.com", //
  phone: "(+54) 02975949959", //
  location: "Argentina", //
  linkedin: "https://www.linkedin.com/in/miguel-paredes-it/", //
  github: "https://github.com/MiguelParedes24", //
  summary: "Soy un Profesional Analista Programador Universitario graduado, con sólida base en desarrollo web FullStack. Me especializo en tecnologías como JavaScript, PHP, Laravel, React y bases de datos SQL. Busco aportar soluciones innovadoras y eficientes en entornos dinámicos."
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"], //
    icon: Layout
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Java", "C#", "SQL", "MySQL"], //
    icon: Database
  },
  {
    category: "Herramientas & Metodologías",
    items: ["Git", "GitHub", "API REST", "MVC", "Agile/Scrum", "JSON"], //
    icon: Terminal
  }
];

export const projects = [
  {
    title: "CaesarTalk", //
    desc: "Sistema web de mensajería con cifrado César para el envío seguro de mensajes.", //
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "TailwindCSS"], //
    icon: Code2,
    demo: "https://caesartalk-demo.onrender.com", 
    repo: "https://github.com/MiguelParedes24/CaesarTalk",

    credentials: [
      { label: "Usuario", user: "usuario_demo", pass: "Demo1234" },
      { label: "Admin Bot", user: "admin_bot", pass: "AdminSecret123" }
    ]
  },
  {
    title: "Busify", //
    desc: "Sistema de gestión de transporte escolar. Colaboración en módulo de administración y visualización de datos.", //
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"], //
    icon: Layout
  }
];

export const experience = [
  {
    role: "Analista Programador Universitario",
    place: "Universidad Nacional de la Patagonia San Juan Bosco (UNPSJB)",
    period: "02/2015 - 02/2025",
    type: "Educación" //
  },
  {
    role: "Gestión Administrativa y Sistemas",
    place: "SUBE y TEG - Comodoro Rivadavia",
    period: "2020 - 2022",
    desc: "Carga, verificación y validación de datos en sistemas internos. Resolución de consultas y problemas relacionados con transporte.", //
    type: "Laboral"
  },
  {
    role: "Gestión Administrativa",
    place: "Centro de Estudiantes Ingeniería (UNPSJB)",
    period: "2018 - 2020",
    desc: "Atención a estudiantes, coordinación con proveedores y gestión de stock.", //
    type: "Laboral"
  }
];