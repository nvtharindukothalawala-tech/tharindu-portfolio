"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const roles = [
  {
    title: "Head Prefect",
    organization: "School Prefects' Board",
    period: "School Leadership Role",
    description:
      "Led the school prefects' board, coordinating discipline, events, and student welfare initiatives. Developed strong teamwork, communication, and leadership skills through managing a team of prefects and representing the student body to school administration.",
  },
  {
    title: "Member",
    organization: "Leo Club of Sri Lanka Technology Campus",
    period: "Aug 2024 — Present · 2 yrs",
    description:
      "Active member contributing to community service and volunteering initiatives organized by the university's Leo Club chapter.",
  },
  {
    title: "Member",
    organization: "AIESEC",
    period: "Mar 2024 — Present · 2 yrs 5 mos",
    description:
      "Involved with AIESEC's youth leadership and global volunteering programs, engaging in cross-cultural collaboration and community initiatives.",
  },
  {
    title: "Member",
    organization: "LEO Club of Padukka",
    period: "Jan 2022 — Present · 4 yrs 7 mos",
    description:
      "Long-standing member participating in local community service projects and volunteering activities in the Padukka area.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Beyond Academics"
          title="Leadership & Activities"
        />

        <p className="mb-8 text-center text-sm text-[#9CA3AF]">
          <a
            href="https://brns.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            Bope Rajasinghe National School (BRNS)
          </a>
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <Users className="mb-3 text-[#D4AF37]" size={24} />
                <p className="mb-1 text-sm text-[#D4AF37]">{role.period}</p>
                <h3 className="mb-1 font-semibold text-[#F9FAFB]">
                  {role.title}
                </h3>
                <p className="mb-2 text-sm text-[#9CA3AF]">
                  {role.organization}
                </p>
                <p className="text-sm text-[#9CA3AF]">{role.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}