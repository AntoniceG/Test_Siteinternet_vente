export const SectionTitleSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-9 w-full">
      <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] text-center tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
        Loved by designers and
        <br />
        developers across the planet
      </h2>

      <p className="max-w-[580px] font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] text-center tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
        Here&apos;s what people are saying about Launch UI
      </p>
    </section>
  );
};
