"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const education = [
  {
    degree: "Bachelor's in Data Science, Information Technology",
    school: "Sri Lanka Technology Campus (SLTC)",
    period: "Oct 2023 — Feb 2027",
    details: "Currently studying.",
    link: "https://sltc.ac.lk/",
  },
  {
    degree: "NVQ 5 — Mechatronics, Robotics, and Automation Engineering",
    school: "Sri Lanka College of Technology - Maradana",
    period: "Apr 2020 — Jul 2023",
    details: "Grade: Finalist. Skills: NVQs.",
    link: "https://dtet.gov.lk/en/course-details/",
  },
  {
    degree: "Diploma of Education — English Language and Literature, General",
    school: "Aquinas College of Higher Studies",
    period: "Apr 2018 — Aug 2018",
    details: "",
    link: "https://www.aquinas.lk/",
  },
  {
    degree: "Secondary Education",
    school: "Bope Rajasinghe National School (BRNS)",
    period: "Jan 2005 — Dec 2018",
    details: "",
    link: "https://brns.lk/",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="My Journey" title="Education" />

        <div className="relative border-l border-white/10 pl-8">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                <GraduationCap size={16} />
              </span>
              <Card>
                <p className="mb-1 text-sm text-[#D4AF37]">{item.period}</p>
                <h3 className="mb-1 text-xl font-semibold text-[#F9FAFB]">
                  {item.degree}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-block text-[#9CA3AF] hover:text-[#D4AF37] hover:underline"
                  >
                    {item.school}
                  </a>
                ) : (
                  <p className="mb-2 text-[#9CA3AF]">{item.school}</p>
                )}
                {item.details && (
                  <p className="text-sm text-[#9CA3AF]">{item.details}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}