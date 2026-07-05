"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const projects = [
  {
    title: "FUTURIX-AI",
    description:
      "An AI-based prediction and analysis system built around machine learning pipelines, focused on generating accurate, data-driven insights.",
    tech: ["Python", "Machine Learning"],
    github: "https://github.com/nvtharindukothalawala-tech",
  },
  {
    title: "eBay Sales Business Intelligence",
    description:
      "Analysis of eBay sales data covering time series trends and exploratory data analysis, visualized through an interactive Power BI dashboard.",
    tech: ["Python", "Jupyter Notebook", "Power BI"],
    github:
      "https://github.com/nvtharindukothalawala-tech/ebay-sales-business-intelligence",
  },
  {
    title: "Student Management App",
    description:
      "An Android application for managing student records, built with a local SQLite database for data storage.",
    tech: ["Android", "SQLite"],
    github:
      "https://github.com/nvtharindukothalawala-tech/StudentManagementApp",
  },
  {
    title: "Big Data Assignment",
    description:
      "A data analysis and processing project covering ingestion, transformation, and visualization of large datasets using Python.",
    tech: ["Python", "Data Processing"],
    github: "https://github.com/nvtharindukothalawala-tech",
  },
  {
    // TODO: Replace with the real title/description of your DagsHub project
    title: "DagsHub ML Project",
    description:
      "A machine learning project tracked and versioned on DagsHub. Add the real project title and description here.",
    tech: ["Machine Learning", "DagsHub"],
    github: "https://dagshub.com/nv.tharindukothalawala",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          description="A selection of things I've built."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="flex h-full flex-col">
                <h3 className="mb-2 text-lg font-semibold text-[#F9FAFB]">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-[#9CA3AF]">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-[#9CA3AF] transition-colors hover:text-[#D4AF37]"
                >
                  <FaGithub /> View Code
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}