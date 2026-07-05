export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#000000] py-10 text-center text-[#9CA3AF]">
      <p className="text-sm">
        © {year} Tharindu Kothalawala. All rights reserved.
      </p>
    </footer>
  );
}