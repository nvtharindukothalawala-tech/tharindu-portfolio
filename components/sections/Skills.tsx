"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "MATLAB", "C++", "SQL"],
  },
  {
    title: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Power BI"],
  },
  {
    title: "Robotics & Hardware",
    skills: ["Arduino", "Embedded Systems", "Automation", "Control Systems"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "DagsHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="What I Work With"
          title="Skills"
          description="Technologies and tools I use to build and ship projects."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="mb-4 font-semibold text-[#D4AF37]">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-[#F9FAFB]">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-[#9CA3AF]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}