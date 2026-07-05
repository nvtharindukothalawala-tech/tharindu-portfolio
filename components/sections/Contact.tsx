"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:nv.tharindukothalawala@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="bg-[#000000] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Let's Connect"
          title="Contact Me"
          description="Have a project in mind or just want to say hi? Send a message."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            {status === "sent" ? (
              <p className="text-center text-[#D4AF37]">
                Your email app should now be open with the message ready to
                send. Thanks for reaching out!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-[#F9FAFB] outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-[#F9FAFB] outline-none focus:border-[#D4AF37]"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-[#F9FAFB] outline-none focus:border-[#D4AF37]"
                />
                <div className="flex justify-center">
                  <Button onClick={() => {}}>
                    <Send size={16} /> Send Message
                  </Button>
                </div>
              </form>
            )}
          </Card>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="mailto:nv.tharindukothalawala@gmail.com"
              className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#D4AF37]"
            >
              <Mail size={16} />
              nv.tharindukothalawala@gmail.com
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-xl text-[#9CA3AF]">
              <a
                href="https://github.com/nvtharindukothalawala-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/tharindu-kothalawala-09b5b4184/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://dagshub.com/nv.tharindukothalawala"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
                aria-label="DagsHub"
              >
                <FaDatabase />
              </a>
              <a
                href="https://www.instagram.com/tharindu_kothalawala/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/tharindu.kothalawala.2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/94765558792"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#D4AF37]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}