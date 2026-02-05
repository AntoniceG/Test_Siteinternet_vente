export const PartnerLogosSection = (): JSX.Element => {
  const technologies = [
    {
      icon: "/figma.svg",
      name: "Figma",
      version: null,
    },
    {
      icon: "/react.svg",
      name: "React.js",
      version: "18.3.1",
    },
    {
      icon: "/typescript.svg",
      name: "Typescript",
      version: "5.6.2",
    },
    {
      icon: "/shadcn.svg",
      name: "Shadcn",
      version: "2.0.7",
    },
    {
      icon: "/tailwind.svg",
      name: "Tailwind CSS",
      version: "3.4.11",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1312px] items-center gap-12 px-8 py-20 w-full bg-zinc-950">
      <h2 className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-semibold-font-size)] text-center tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
        Built with the best tools
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-x-12 w-full">
        {technologies.map((tech, index) => (
          <div key={index} className="inline-flex items-center gap-2">
            <img className="w-6 h-6" alt={tech.name} src={tech.icon} />

            <span className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-medium-font-style)]">
              {tech.name}
            </span>

            {tech.version && (
              <span className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-medium-font-style)]">
                {tech.version}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
