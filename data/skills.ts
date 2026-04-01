export const skillCategories = [
  {
    category: "Programming",
    skills: ["C++", "C#", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Backend",
    skills: ["ASP.NET Core", ".NET 8", "EF Core", "Node.js", "Express.js", "Spring Boot"],
  },
  {
    category: "Frontend",
    skills: ["Angular", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "MySQL", "MongoDB"],
  },
  {
    category: "AI & Automation",
    skills: ["LangChain", "LangGraph", "CrewAI", "n8n"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Microsoft Azure", "IIS", "Docker", "Git", "GitHub"],
  },
  {
    category: "Tools",
    skills: ["Postman", "Swagger", "VS Code"],
  },
] as const;

export type SkillCategory = (typeof skillCategories)[number];
