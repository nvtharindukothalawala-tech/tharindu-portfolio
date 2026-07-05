import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#D4AF37] text-black hover:bg-[#FACC15] hover:scale-105"
      : "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:scale-105";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
