"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accessibility,
  ZoomIn,
  ZoomOut,
  Contrast,
  Eye,
  Underline,
  Type,
  RotateCcw,
  X,
} from "lucide-react";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [textScale, setTextScale] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [invert, setInvert] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  const applyStyles = (
    updates: Partial<{
      textScale: number;
      grayscale: boolean;
      highContrast: boolean;
      invert: boolean;
      underlineLinks: boolean;
      readableFont: boolean;
    }>
  ) => {
    const html = document.documentElement;

    const scale = updates.textScale ?? textScale;
    const gray = updates.grayscale ?? grayscale;
    const contrast = updates.highContrast ?? highContrast;
    const inv = updates.invert ?? invert;
    const underline = updates.underlineLinks ?? underlineLinks;
    const font = updates.readableFont ?? readableFont;

    html.style.fontSize = `${scale}%`;

    const filters: string[] = [];
    if (gray) filters.push("grayscale(100%)");
    if (contrast) filters.push("contrast(1.4)");
    if (inv) filters.push("invert(1) hue-rotate(180deg)");
    html.style.filter = filters.length ? filters.join(" ") : "none";

    html.classList.toggle("a11y-underline-links", underline);
    html.classList.toggle("a11y-readable-font", font);
  };

  const increaseText = () => {
    const next = Math.min(textScale + 10, 150);
    setTextScale(next);
    applyStyles({ textScale: next });
  };

  const decreaseText = () => {
    const next = Math.max(textScale - 10, 80);
    setTextScale(next);
    applyStyles({ textScale: next });
  };

  const toggleGrayscale = () => {
    const next = !grayscale;
    setGrayscale(next);
    applyStyles({ grayscale: next });
  };

  const toggleHighContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    applyStyles({ highContrast: next });
  };

  const toggleInvert = () => {
    const next = !invert;
    setInvert(next);
    applyStyles({ invert: next });
  };

  const toggleUnderline = () => {
    const next = !underlineLinks;
    setUnderlineLinks(next);
    applyStyles({ underlineLinks: next });
  };

  const toggleReadableFont = () => {
    const next = !readableFont;
    setReadableFont(next);
    applyStyles({ readableFont: next });
  };

  const reset = () => {
    setTextScale(100);
    setGrayscale(false);
    setHighContrast(false);
    setInvert(false);
    setUnderlineLinks(false);
    setReadableFont(false);
    applyStyles({
      textScale: 100,
      grayscale: false,
      highContrast: false,
      invert: false,
      underlineLinks: false,
      readableFont: false,
    });
  };

  const tools = [
    { label: "Increase Text", icon: ZoomIn, action: increaseText },
    { label: "Decrease Text", icon: ZoomOut, action: decreaseText },
    { label: "Grayscale", icon: Eye, action: toggleGrayscale, active: grayscale },
    {
      label: "High Contrast",
      icon: Contrast,
      action: toggleHighContrast,
      active: highContrast,
    },
    { label: "Negative Contrast", icon: Eye, action: toggleInvert, active: invert },
    {
      label: "Links Underline",
      icon: Underline,
      action: toggleUnderline,
      active: underlineLinks,
    },
    {
      label: "Readable Font",
      icon: Type,
      action: toggleReadableFont,
      active: readableFont,
    },
    { label: "Reset", icon: RotateCcw, action: reset },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-64 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#1F2937]/90 shadow-2xl shadow-black/50 backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
                Accessibility
              </p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close accessibility panel"
                className="text-[#9CA3AF] hover:text-[#F9FAFB]"
              >
                <X size={16} />
              </button>
            </div>
            <ul className="py-1">
              {tools.map((tool) => (
                <li key={tool.label}>
                  <button
                    onClick={tool.action}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-[#D4AF37]/10 ${
                      tool.active ? "text-[#D4AF37]" : "text-[#F9FAFB]"
                    }`}
                  >
                    <tool.icon size={16} />
                    {tool.label}
                    {tool.active && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        aria-label="Accessibility Tools"
        className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20"
      >
        <Accessibility size={24} />
      </motion.button>
    </div>
  );
}