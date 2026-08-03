"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  status: "Ongoing" | "Completed";
  type: "Individual Project" | "Group Project";
};

const projects: Project[] = [
  {
    title: "Aladdin — AI Forex Trading Assistant",
    description:
      "An AI-powered multi-agent Forex trading assistant that supports market analysis, risk management, trading decisions, trade planning, journaling, and explainable AI coaching.",
    tech: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "AI Agents",
      "Docker",
      "GitHub Actions",
    ],
    github:
      "https://github.com/nvtharindukothalawala-tech/Aladdin-forex-ai",
    status: "Ongoing",
    type: "Individual Project",
  },
  {
    title: "Scalable Retail Analytics Pipeline",
    description:
      "An end-to-end big data pipeline that processes more than 541,000 retail transactions using Bronze, Silver, and Gold data layers, RFM analysis, market-basket analysis, and MongoDB storage.",
    tech: ["Python", "PySpark", "MongoDB", "Big Data", "Jupyter"],
    github:
      "https://github.com/nvtharindukothalawala-tech/Scalable-Retail-Analytics-Pipeline",
    status: "Completed",
    type: "Group Project",
  },
  {
    title: "Lanka Smart Mart",
    description:
      "A full-stack e-commerce mobile application with Firebase services, offline SQLite storage, authentication, inventory management, and AI-powered product recognition.",
    tech: ["Flutter", "Dart", "Firebase", "SQLite", "Google ML Kit"],
    github:
      "https://github.com/nvtharindukothalawala-tech/Lanka-Smart-Mart",
    status: "Completed",
    type: "Group Project",
  },
  {
    title: "QuizServer",
    description:
      "An Electron desktop application for creating and running quizzes over a local network. Students can join using a browser through a LAN link or QR code without installing additional software.",
    tech: ["Electron", "JavaScript", "Node.js", "HTML", "CSS"],
    github:
      "https://github.com/nvtharindukothalawala-tech/QuizServer",
    status: "Completed",
    type: "Group Project",
  },
  {
    title: "eBay Sales Business Intelligence",
    description:
      "A business intelligence project that analyzes real eBay sales data using data cleaning, exploratory analysis, time-series analysis, machine learning, and an interactive Power BI dashboard.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Jupyter",
      "Power BI",
    ],
    github:
      "https://github.com/nvtharindukothalawala-tech/ebay-sales-business-intelligence",
    status: "Completed",
    type: "Individual Project",
  },
  {
    title: "Student Management App",
    description:
      "An Android application for managing student records with local SQLite storage, form validation, student counting, and complete create, read, update, and delete operations.",
    tech: ["Java", "Android Studio", "SQLite"],
    github:
      "https://github.com/nvtharindukothalawala-tech/StudentManagementApp",
    status: "Completed",
    type: "Individual Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          description="A collection of individual and collaborative projects I have built while developing my skills in AI, software engineering, mobile development, and data analytics."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="h-full"
            >
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === "Ongoing"
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  <span className="rounded-full border border-[#374151] px-3 py-1 text-xs text-[#9CA3AF]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-[#F9FAFB]">
                  {project.title}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-6 text-[#9CA3AF]">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#9CA3AF] transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  <FaGithub className="text-base" />
                  View Code
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/nvtharindukothalawala-tech?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#D4AF37] px-6 py-3 text-sm font-medium text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            <FaGithub className="text-lg" />
            View All GitHub Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}