export const experiences = [
  {
    id: "1",
    role: "Software Developer 1",
    company: "House of Code INC",
    period: "Sept 2025 – Present",
    highlights: [
      "Built Angular + .NET Core apps serving 200+ users",
      "Reduced SQL query time by 25%",
      "Implemented JWT & RBAC",
      "Built AI chatbots using CrewAI & LangGraph",
      "Deployed apps to Azure & IIS",
    ],
  },
  {
    id: "2",
    role: "Web Developer",
    company: "Marathe Infotech",
    period: "Aug 2023 – Feb 2025",
    highlights: [
      "Improved page load speed by 30%",
      "Worked on 10+ client websites",
    ],
  },
] as const;

export type Experience = (typeof experiences)[number];
