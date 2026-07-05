"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

// TODO: Replace with your real certifications from LinkedIn
const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Jul 2026",
    image: "/images/certificates/cert1.png",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Jul 2026",
    image: "/images/certificates/cert2.png",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Jul 2026",
    image: "/images/certificates/cert3.png",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification ",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Jul 2026",
    image: "/images/certificates/cert4.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Verified Skills" title="Certifications" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative h-40 w-full bg-black/30">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 font-semibold text-[#F9FAFB]">
                    {cert.title}
                  </h3>
                  <p className="mb-1 text-sm text-[#9CA3AF]">{cert.issuer}</p>
                  <p className="text-xs text-[#D4AF37]">{cert.date}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#9CA3AF]">
          See all certifications on{" "}
          <a
            href="https://www.linkedin.com/in/tharindu-kothalawala-09b5b4184/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}