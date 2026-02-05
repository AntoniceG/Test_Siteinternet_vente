export const PartnerLogosSection = (): JSX.Element => {
    const logos = [
        { src: "/typescript.svg", alt: "Typescript" },
        { src: "/react.svg", alt: "React" },
        { src: "/tailwind.svg", alt: "Tailwind" },
        { src: "/figma.svg", alt: "Figma" },
        { src: "/shadcn.svg", alt: "Shadcn UI" },
    ];

    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-10 px-8 py-20 relative w-full bg-zinc-950">
            <p className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-medium-font-size)] text-center tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
                PROJET RÉALISÉ AVEC LES MEILLEURES TECHNOLOGIES
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        className="h-8 max-w-[120px] object-contain"
                        alt={logo.alt}
                        src={logo.src}
                    />
                ))}
            </div>
        </section>
    );
};
