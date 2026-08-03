"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "Dart",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Feature Engineering",
      "Model Evaluation",
      "Time-Series Analysis",
      "Business Intelligence",
      "Power BI",
      "Matplotlib",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "AI Agents",
      "LLMs",
      "Prompt Engineering",
      "LangGraph",
      "OpenAI API",
      "Decision Systems",
      "Automation",
    ],
  },
  {
    title: "Big Data & Databases",
    skills: [
      "PySpark",
      "MongoDB",
      "PostgreSQL",
      "SQLite",
      "Firebase",
      "Data Pipelines",
      "RFM Analysis",
      "Market Basket Analysis",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "API Integration",
      "Authentication",
      "JSON",
      "CRUD Operations",
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      "Flutter",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Electron.js",
      "Responsive UI",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Jupyter Notebook",
      "VS Code",
      "Android Studio",
      "DagsHub",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Technical Expertise"
          title="Skills & Technologies"
          description="A combination of programming, data science, artificial intelligence, software engineering, and development tools that I use to design and build modern applications."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Card className="h-full">
                <h3 className="mb-5 text-xl font-semibold text-[#D4AF37]">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#D4AF37]/30 bg-[#111111] px-3 py-2 text-sm text-[#F9FAFB] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}