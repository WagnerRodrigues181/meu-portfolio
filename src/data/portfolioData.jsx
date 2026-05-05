import proj1Image from "../assets/form.png";
import cryptoDashboard from "../assets/crypto-dashboard.png";
import cryptoDetailCard from "../assets/crypto-detail-card.png";
import horaCodarLogica from "../assets/hora-codar-logica.png";
import trybeFrontend from "../assets/trybe-frontend.png";
import trybeBackend from "../assets/trybe-backend.png";
import trybeCs from "../assets/trybe-cs.png";
import trybeCsharp from "../assets/trybe-csharp.png";
import trybeFullstack from "../assets/trybe-fullstack.png";
import Obsidian from "../assets/Obsidian.png";

// NutriLens images
import nutrilensHome from "../assets/nutrilens-dashboard.png";
import nutrilensMeals from "../assets/nutrilens-meal-templates.png";
import nutrilensGraphs from "../assets/nutrilens-graphs.png";
import nutrilensAchievements from "../assets/nutrilens-achievement-progress.png";

// GrindTracker images
import grindLogin from "../assets/grind-login.png";
import grindProfile from "../assets/grind-profile.png";
import grindDash from "../assets/grind-dash.png";
import grindTimer from "../assets/grind-timer.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiSequelize,
  SiPrisma,
  SiFigma,
  SiJsonwebtokens,
  SiSharp,
  SiDotnet,
  SiFirebase,
  SiVercel,
  SiTailwindcss,
  SiVitest,
} from "react-icons/si";
import { TbChartLine, TbChartBar } from "react-icons/tb";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import BugReportIcon from "@mui/icons-material/BugReport";
import LayersIcon from "@mui/icons-material/Layers";
import TimelineIcon from "@mui/icons-material/Timeline";
import ApiIcon from "@mui/icons-material/Api";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import StorageIcon from "@mui/icons-material/Storage";

export const certifications = [
  { title: "Módulo Front-End (Trybe)", image: trybeFrontend },
  { title: "Módulo Back-End (Trybe)", image: trybeBackend },
  { title: "Módulo Ciência da Computação (Trybe)", image: trybeCs },
  { title: "Certificação Eletiva em C# (Trybe)", image: trybeCsharp },
  {
    title: "Formação em Desenvolvimento Full-Stack (Trybe)",
    image: trybeFullstack,
  },
  { title: "Método Mente Lógica (Hora de Codar)", image: horaCodarLogica },
];

export const frontEndStacks = [
  { label: "HTML5", icon: <FaHtml5 /> },
  { label: "CSS3", icon: <FaCss3Alt /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "React", icon: <FaReact /> },
  { label: "Redux", icon: <SiRedux /> },
  { label: "Context API", icon: <FaReact /> },
  { label: "Figma", icon: <SiFigma /> },
];

export const backEndStacks = [
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "Express.js", icon: <SiExpress /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "SQLite", icon: <SiSqlite /> },
  { label: "Sequelize", icon: <SiSequelize /> },
  { label: "Prisma", icon: <SiPrisma /> },
  { label: "Python", icon: <FaPython /> },
  { label: "Docker", icon: <FaDocker /> },
  { label: "JWT", icon: <SiJsonwebtokens /> },
  { label: "C# / .NET Core", icon: <SiSharp /> },
  { label: "ASP.NET", icon: <SiDotnet /> },
  { label: "SQL Server", icon: <StorageIcon /> },
];

export const otherStacks = [
  { label: "POO/OOP", icon: <GroupWorkIcon /> },
  { label: "API REST", icon: <ApiIcon /> },
  { label: "Testes Automatizados", icon: <BugReportIcon /> },
  { label: "Layered Architecture", icon: <LayersIcon /> },
  { label: "Metodologias Ágeis", icon: <TimelineIcon /> },
  { label: "Microservices", icon: <LayersIcon /> },
  {
    label: "Obsidian",
    icon: (
      <img src={Obsidian} alt="Obsidian" className="w-5 h-5 object-contain" />
    ),
  },
];

export const projects = [
  {
    title: "NutriLens",
    description:
      "Rastreador nutricional completo com análise de macros, visualização de dados e alta cobertura de testes. Dashboard inteligente com tracking em tempo real, múltiplas visualizações de dados e sistema de insights automáticos.",
    longDescription:
      "Aplicação full-stack de tracking nutricional focada em precisão, análise de dados e experiência do usuário. Desenvolvida com arquitetura escalável, type-safety completo e 96% de cobertura de testes. Inclui dashboard com progresso circular de macros, sistema de streaks e gamificação, CRUD completo de refeições com templates reutilizáveis, 4 tipos de gráficos interativos (linha, pizza, barras, área) com análise estatística, e portabilidade total com export/import em CSV e JSON.",
    stack: [
      { label: "React", icon: <FaReact /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Tailwind", icon: <SiTailwindcss /> },
      { label: "Recharts", icon: <TbChartBar /> },
      { label: "Vitest", icon: <SiVitest /> },
    ],
    features: [
      "📊 Dashboard inteligente com progresso circular e streaks",
      "🍽️ CRUD completo de refeições com templates reutilizáveis",
      "📈 4 tipos de gráficos interativos com insights automáticos",
      "🧪 96% de cobertura de testes (Vitest + RTL)",
      "💾 Export/Import em CSV e JSON",
      "🎨 Dark mode com persistência",
      "⚡ Arquitetura escalável e type-safe",
    ],
    github: "https://github.com/WagnerRodrigues181/nutri-lens",
    demo: "https://nutrilens-pearl.vercel.app/",
    images: [
      nutrilensHome,
      nutrilensMeals,
      nutrilensGraphs,
      nutrilensAchievements,
    ],
    featured: true,
  },
  {
    title: "GrindTracker",
    description:
      "App de tracking de hábitos construído com vibe de meme, mas com execução de titânio. Sistema completo com autenticação, gráficos em tempo real e gamificação para acompanhar o grind diário com disciplina.",
    longDescription:
      "Aplicação full-stack de tracking de hábitos desenvolvida para competição saudável entre usuários. Inclui autenticação segura via Firebase Auth, tracking de atividades com persistência em tempo real no Firestore, gráficos semanais coletivos com Recharts, tabela de hábitos individual com % de cumprimento semanal, e sistema de níveis e conquistas. Design limpo e responsivo com Tailwind CSS.",
    stack: [
      { label: "React", icon: <FaReact /> },
      { label: "Firebase", icon: <SiFirebase /> },
      { label: "Tailwind", icon: <SiTailwindcss /> },
      { label: "Recharts", icon: <TbChartLine /> },
    ],
    features: [
      "🔐 Autenticação segura com Firebase Auth",
      "📊 Tracking em tempo real com Firestore",
      "📈 Gráficos semanais coletivos e individuais",
      "✅ Tabela de hábitos com % de cumprimento",
      "🏆 Sistema de gamificação e conquistas",
      "🎨 Interface clean e responsiva",
      "⚡ Deploy automatizado na Vercel",
    ],
    github: "https://github.com/WagnerRodrigues181/grind-tracker",
    demo: "https://grindtracker.vercel.app/",
    images: [grindDash, grindProfile, grindTimer, grindLogin],
    featured: false,
  },
  {
    title: "CryptoVue Dashboard",
    description:
      "Dashboard moderno de criptomoedas em tempo real com React + TypeScript. Acompanhe preços, configure alertas personalizados, visualize gráficos históricos e gerencie sua watchlist com design glassmorphism responsivo.",
    longDescription:
      "Aplicação completa para tracking de criptomoedas com dados em tempo real da CoinGecko API. Inclui sistema de alertas de preço, gráficos interativos com múltiplos períodos (24H, 7D, 30D, 90D, 1Y), watchlist personalizada e filtros inteligentes (Top Gainers/Losers). Implementação com arquitetura limpa, TypeScript forte em 100% do código, cache inteligente e performance otimizada.",
    stack: [
      { label: "React", icon: <FaReact /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Tailwind", icon: <SiTailwindcss /> },
      { label: "Zustand", icon: <MdOutlineSettingsSuggest /> },
      { label: "Recharts", icon: <TbChartLine /> },
    ],
    features: [
      "📊 Dados em Tempo Real via CoinGecko API",
      "📈 Gráficos Interativos com múltiplos períodos",
      "⭐ Watchlist personalizada",
      "🔔 Sistema de alertas de preço",
      "🔍 Busca avançada instantânea",
      "🎨 Design Glassmorphism moderno",
      "⚡ Cache inteligente e alta performance",
    ],
    github: "https://github.com/WagnerRodrigues181/crypto-dashboard",
    demo: "https://crypto-dashboard-wr.netlify.app/",
    images: [cryptoDashboard, cryptoDetailCard],
    featured: false,
  },
];
