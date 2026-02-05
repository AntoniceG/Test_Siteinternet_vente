export const DashboardPreviewSection = (): JSX.Element => {
  const footerLinks = [
    { text: "Privacy Policy" },
    { text: "Terms of service" },
  ];

  return (
    <footer className="flex items-center justify-between gap-4 w-full">
      <p className="font-text-xs-font-normal font-[number:var(--text-xs-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-xs-font-normal-font-size)] tracking-[var(--text-xs-font-normal-letter-spacing)] leading-[var(--text-xs-font-normal-line-height)] [font-style:var(--text-xs-font-normal-font-style)]">
        © 2024 Mikołaj Dobrucki. All rights reserved.
      </p>

      <nav className="flex items-center gap-4">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-text-xs-font-normal font-[number:var(--text-xs-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-xs-font-normal-font-size)] tracking-[var(--text-xs-font-normal-letter-spacing)] leading-[var(--text-xs-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-normal-font-style)] hover:text-zinc-300 transition-colors"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </footer>
  );
};
