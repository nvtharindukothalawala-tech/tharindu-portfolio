"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const quickFacts = [
  { label: "Based In", value: "Sri Lanka" },
  { label: "University", value: "SLTC" },
  { label: "Graduating", value: "2027" },
  { label: "Focus", value: "Data Science + Robotics" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col items-center"
          >
            {/* Glow behind the photo */}
            <div className="pointer-events-none absolute top-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative h-[500px] w-80 overflow-hidden rounded-2xl border border-[#D4AF37]/30">
              <Image
                src="/images/about-photo.png"
                alt="About Tharindu"
                fill
                className="object-contain"
              />
            </div>

            {/* Skill tags under the photo */}
            <div className="relative mt-6 flex flex-wrap justify-center gap-2">
              {["Python", "Machine Learning", "Robotics", "Automation"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1 text-xs text-[#D4AF37]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card>
              <p className="mb-4 leading-relaxed text-[#F9FAFB]">
                I&apos;m Tharindu Kothalawala, a Bachelor&apos;s student in
                Data Science at Sri Lanka Technology Campus (SLTC), with a
                National Diploma in Mechatronic Engineering from the
                Department of Technical Education &amp; Training (DTET).
                That combination gives me a foundation in both intelligent
                software systems and the hardware/automation side of
                engineering.
              </p>
              <p className="mb-4 leading-relaxed text-[#9CA3AF]">
                My interest lies where these two fields meet — building
                machine learning models that can eventually drive real,
                physical systems like robots and automated equipment.
                I&apos;m working toward a career at the intersection of data
                science and robotics.
              </p>
              <p className="leading-relaxed text-[#9CA3AF]">
                Beyond the technical side, I served as Head Prefect during
                school, which shaped my teamwork, communication, and
                leadership skills — abilities I continue to rely on in
                group projects and collaborative work today.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Quick facts row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-white/10 bg-[#1F2937]/40 px-4 py-5 text-center"
            >
              <p className="text-xs uppercase tracking-wide text-[#9CA3AF]">
                {fact.label}
              </p>
              <p className="mt-1 font-semibold text-[#D4AF37]">
                {fact.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}