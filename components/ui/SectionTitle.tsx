type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-bold text-[#F9FAFB] md:text-5xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-[#9CA3AF]">{description}</p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#D4AF37]" />
    </div>
  );
}
