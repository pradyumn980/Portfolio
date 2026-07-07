import { Code2, Globe, Database, Cpu, Wrench, GraduationCap, Award, Briefcase, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  icon: any; // Lucide icon
  skills: Skill[];
  color: string; // for border/glow accent
}

export interface ExperienceItem {
  role: string;
  company: string;
  website: string,
  duration: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  category: 'Full Stack' | 'AI & NLP' | 'Frontend' | 'Full Stack & AI'| 'All';
  image: string;
  tech: string[];
  github: string;
  live: string;
  features: string[];
}

export interface StatItem {
  id: string;
  value: string;
  target: number;
  suffix: string;
  label: string;
  icon: any;
}

export const PERSONAL_INFO = {
  name: "Pradyumn Agrahari",
  title: "Hi, I'm",
  taglines: [
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI Enthusiast"
  ],
  bio: "I build scalable web applications, AI-powered solutions, and intuitive digital experiences that solve real-world problems.",
  aboutText: "I am a B.Tech Computer Science student, Full Stack Developer, and AI enthusiast who loves turning complex problems into elegant, production-ready code. From building microservices to designing responsive frontends and leveraging LLMs, I enjoy working across the entire development stack.",
  strengths: [
    "MERN Stack",
    "REST APIs",
    "Responsive UI",
    "Database Design",
    "Generative AI",
    "LangChain",
    "RAG",
    "Java",
    "C++"
  ],
  socials: {
    github: "https://github.com/Pradyumn980", // placeholder, can be customized
    linkedin: "https://www.linkedin.com/in/pradyumn-agrahari/",
    leetcode: "https://leetcode.com/u/PRADYUMN_AGRAHARI/",
    hackerrank: "https://hackerrank.com",
    email: "pradyumnagrahari111@gmail.com" // placeholder email
  },
  resumeUrl: "https://drive.google.com/file/d/1g8OvDYOoolvTa5UPRfTfhxTBGPCJitLd/view?usp=sharing" // Can link to a public drive file or local asset
};

export const STATS_CARDS = [
  {
    value: "500+",
    label: "LeetCode Problems",
    sub: "Data Structures & Algorithms"
  },
  {
    value: "5★",
    label: "HackerRank Java",
    sub: "Gold Badge in Java Programming"
  },
  {
    value: "B.Tech",
    label: "CSE Student",
    sub: "Focus on Software Engineering"
  },
  {
    value: "Active",
    label: "SDE Opportunities",
    sub: "Open for Internships & Roles"
  }
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode",
    value: "500",
    target: 500,
    suffix: "+",
    label: "LeetCode Problems Solved",
    icon: Code2
  },
  {
    id: "hackerrank",
    value: "5",
    target: 5,
    suffix: "★",
    label: "HackerRank Java Badge",
    icon: Award
  },
  {
    id: "fs-exp",
    value: "2",
    target: 2,
    suffix: "+ Years",
    label: "Full Stack Development Experience",
    icon: Briefcase
  },
  {
    id: "co-founder",
    value: "1",
    target: 1,
    suffix: " Startup",
    label: "Co-Founded NumberApp",
    icon: Zap
  },
  {
    id: "education",
    value: "4",
    target: 4,
    suffix: "th Year B.Tech",
    label: "Computer Science & Engineering",
    icon: GraduationCap
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    title: "Backend",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "MongoDB" },
      { name: "Firebase" }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Java" },
      { name: "C++" },
      { name: "Python" }
    ]
  },
  {
    title: "AI & ML",
    icon: Cpu,
    color: "from-violet-600 to-fuchsia-500",
    skills: [
      { name: "LangChain" },
      { name: "RAG" },
      { name: "Hugging Face Transformers" },
      { name: "OpenAI APIs" }
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Postman" },
      { name: "VS Code" }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Co-Founder",
    company: "NumberApp",
    website: "https://numberapp.in/",
    duration: "02/2025 - Present",
    description: [
      "Co-founded and engineered a salon discovery platform designed to help users find nearby salons and reduce long waiting times.",
      "Spearheaded technical product strategy, architecting both frontend and backend infrastructure.",
      "Designed and implemented real-time slot checking and salon queuing mechanisms."
    ],
    skills: ["React", "Node.js", "MongoDB", "Socket.io", "Product Strategy"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "YesCity",
    website: "https://www.yescity.in/",
    duration: "01/2026 - 03/2026",
    description: [
      "Developing scalable web applications using React, Node.js, and modern databases.",
      "Building modular, reuseable frontend and backend systems, improving code maintainability.",
      "Optimizing web applications for speed, performance, and cross-device responsiveness."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    role: "Full Stack Developer",
    company: "Flux Society",
    website: "https://www.flux.org.in/",
    duration: "08/2025 - Present",
    description: [
      "Built and maintained the official website of Flux, the technical society of MMMUT.",
      "Developed responsive and reusable frontend components for a seamless user experience.",
      "Optimized website performance, accessibility, and cross-device compatibility.",
      "Collaborated with the team to implement new features and maintain the society's digital platform."
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    role: "UI & Frontend Designing",
    company: "MentHub",
    website: "https://menthub.com/app",
    duration: "06/2025 - 09/2025",
    description: [
      "Built 30+ high-fidelity Figma designs for a mentor-student matching platform that increased user engagement by 40%.",
      "Implemented modern UI/UX design systems using React and Tailwind CSS, improving product aesthetics and brand consistency.",
      "Collaborated with developers to integrate designs into the live platform, ensuring pixel-perfect execution and smooth user experiences."
    ],
    skills: ["Figma", "React", "Tailwind CSS", "UI/UX Design", "Prototyping"]
  },
  
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "NumberApp",
    description: "A comprehensive salon discovery platform helping users find nearby salons, check current availability, and reduce physical waiting times.",
    category: "Full Stack",
    image: "numberapp",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/himanshuu932/numberapp-next",
    live: "https://numberapp.in/",
    features: [
      "Real-time salon slot availability updates",
      "Interactive map search using geolocation",
      "Integrated queuing system to check waiting status",
      "Sleek merchant dashboard to manage bookings"
    ]
  },
  {
  title: "AniVerse AI",
  description:
    "An AI-powered anime discovery platform that helps users find anime through natural language search, personalized recommendations, and detailed information using modern AI technologies.",
  category: "Full Stack & AI",
  image: "aniverse",
  tech: [
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Gemini API",
    "Tailwind CSS"
  ],
  github: "https://github.com/pradyumn980/AnimeNew",
  live: "https://anime-new-beta.vercel.app/",
  features: [
    "AI-powered natural language anime search",
    "Personalized anime recommendations based on user preferences",
    "Detailed anime information including ratings, genres, synopsis, and episodes",
    "Responsive modern UI with authentication and favorites management"
  ]
},
{
    title: "AI Workout Recommendation System",
    description: "An intelligent fitness coaching system that analyzes user preferences and goals to generate customized, structured workout regimes.",
    category: "Full Stack & AI",
    image: "fitness",
    tech: ["React", "Python", "Hugging Face", "Firebase"],
    github: "https://github.com/pradyumn980/gym",
    live: "https://gym-nine-xi.vercel.app/",
    features: [
      "Personalized daily workout plans matching physical profiles",
      "Machine learning models classifying exercises",
      "Secure Firebase Auth with email & social login",
      "Interactive goal tracking graphs and calendars"
    ]
  },
  {
    title: "Real-Time Chat Application",
    description: "A modern instant messaging web application featuring end-to-end socket connections, secure token-based user authentication, and file sharing.",
    category: "Full Stack",
    image: "chat",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/pradyumn980/ChatApp",
    live: "https://chat-app-eight-smoky-94.vercel.app/",
    features: [
      "User authentication and private secure chats",
      "Real-time text messaging and online status tracking",
      "Image sharing via Cloudinary CDN integration",
      "Unread messages count and active typing indicator"
    ]
  },
  
];
