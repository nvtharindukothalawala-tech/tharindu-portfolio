"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaEye } from "react-icons/fa";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden bg-[#000000] px-6 pb-16"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero photo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-28 h-[60vh] w-full max-w-sm md:h-[75vh] md:max-w-lg"
      >
        <Image
          src="/images/hero-photo.png"
          alt="Tharindu Kothalawala"
          fill
          sizes="(max-width: 768px) 100vw, 512px"
          priority
          className="object-cover object-top"
        />

        {/* Fade photo into background */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 -mt-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-wide text-white md:text-6xl">
          THARINDU KOTHALAWALA
        </h1>

        <h2 className="mt-4 text-xl font-medium text-[#D4AF37] md:text-2xl">
          Data Science Undergraduate
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[#9CA3AF] md:text-base">
          Machine Learning & AI Enthusiast • Software Engineer • Mechatronics
          Engineer
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="/Tharindu_Kothalawala_CV.pdf"
            download="Tharindu_Kothalawala_CV.pdf"
            aria-label="Download Tharindu Kothalawala CV"
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F1CC54]"
          >
            <FaDownload />
            Download CV
          </a>

          <a
            href="/Tharindu_Kothalawala_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Tharindu Kothalawala CV"
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-lg border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-black"
          >
            <FaEye />
            View CV
          </a>

          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}