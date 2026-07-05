"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden bg-[#000000] px-6 pb-16"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-30 h-[60vh] w-full max-w-sm md:h-[75vh] md:max-w-lg"
      >
        <Image
          src="/images/hero-photo.png"
          alt="Tharindu Kothalawala"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Fade to background at the bottom of the photo */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000000] to-transparent" />
      </motion.div>

      {/* Name overlapping the bottom of the photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 -mt-10 text-center"
      >
        <h1 className="text-4xl font-bold tracking-wide text-[#F9FAFB] md:text-6xl">
          THARINDU KOTHALAWALA
        </h1>
        <h2 className="mt-3 text-lg text-[#9CA3AF] md:text-xl">
          Data Science Undergraduate • Mechatronics Engineer
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <Button href="/resume.pdf">Download CV</Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}