"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const experience = [
  {
    role: "Student Intern",
    company: "LAUGFS Corporation (Rubber) Ltd",
    companyLink:
      "https://www.laugfs.lk/manufacturing-and-distribution/laugfs-corporation-rubber/",
    type: "Internship",
    period: "Jan 2023 — Jul 2023 · 7 mos",
    location: "Horana, Western Province, Sri Lanka",
    tags: ["NVQs"],
  },
  {
    role: "Laboratory Assistant",
    company: "LANKATILES (Lanka Walltiles PLC | Lanka Tiles PLC)",
    companyLink: "https://www.lankatiles.com/",
    type: "Part-time · On-site",
    period: "Jan 2018 — Jun 2018 · 6 mos",
    location: "Colombo District, Western Province, Sri Lanka",
    tags: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Where I've Worked" title="Experience" />

        <div className="relative border-l border-white/10 pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                <Briefcase size={16} />
              </span>
              <Card>
                <p className="mb-1 text-sm text-[#D4AF37]">{item.period}</p>
                <h3 className="mb-1 text-xl font-semibold text-[#F9FAFB]">
                  {item.role}
                </h3>
                <a
                  href={item.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-1 inline-block text-[#9CA3AF] hover:text-[#D4AF37] hover:underline"
                >
                  {item.company} · {item.type}
                </a>
                <p className="text-sm text-[#9CA3AF]">{item.location}</p>
                {item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}