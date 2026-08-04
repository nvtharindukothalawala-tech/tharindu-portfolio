"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
  tags: string[];
  link: string;
};

const experienceItems: ExperienceItem[] = [
  {
    role: "Student Intern",
    company: "LAUGFS Corporation (Rubber) Ltd",
    period: "January 2023 – July 2023",
    type: "Industrial Training",
    location: "Horana, Western Province, Sri Lanka",
    description:
      "Gained hands-on industrial and technical experience in a manufacturing environment as part of NVQ practical training. Observed production operations, maintenance procedures, workplace safety, and engineering processes.",
    tags: [
      "Industrial Training",
      "Manufacturing",
      "Technical Operations",
      "Workplace Safety",
    ],
    link: "https://www.laugfs.lk/manufacturing-and-distribution/laugfs-corporation-rubber/",
  },
  {
    role: "Laboratory Assistant",
    company: "Lanka Walltiles PLC (LANKATILES)",
    period: "January 2018 – June 2018",
    type: "Part-time",
    location: "Colombo District, Western Province, Sri Lanka",
    description:
      "Supported laboratory testing and quality-control activities in an industrial environment. Assisted with sample preparation, test procedures, record handling, and maintaining an organized laboratory workspace.",
    tags: [
      "Laboratory Testing",
      "Quality Control",
      "Data Recording",
      "Teamwork",
    ],
    link: "https://www.lankatiles.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="Professional Journey"
          title="Work Experience"
          description="Industrial and technical experience that helped me develop practical engineering, teamwork, and problem-solving skills."
        />

        <div className="relative border-l border-white/10 pl-8">
          {experienceItems.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Briefcase size={16} />
              </span>

              <Card className="h-full">
                <p className="mb-2 text-sm font-medium text-[#D4AF37]">
                  {item.period}
                </p>

                <h3 className="mb-1 text-xl font-semibold text-[#F9FAFB]">
                  {item.role}
                </h3>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.company} website`}
                  className="mb-2 inline-block text-[#9CA3AF] transition-colors duration-300 hover:text-[#D4AF37] hover:underline"
                >
                  {item.company} · {item.type}
                </a>

                <p className="mb-4 text-sm text-[#6B7280]">
                  {item.location}
                </p>

                <p className="text-sm leading-6 text-[#9CA3AF]">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37]"
                    >
                      {tag}
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