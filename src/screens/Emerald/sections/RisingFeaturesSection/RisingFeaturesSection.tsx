export const RisingFeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[1312px] items-center gap-24 pt-32 pb-0 px-8 relative w-full bg-zinc-950">
      <div className="gap-12 self-stretch z-[1] flex flex-col items-center relative w-full">
        <h2 className="relative max-w-[1248px] mt-[-1.00px] [text-shadow:0px_25px_50px_-12px_#00000040] bg-[linear-gradient(157deg,rgba(250,250,250,1)_0%,rgba(161,161,170,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-text-7xl-font-semibold font-[number:var(--text-7xl-font-semibold-font-weight)] text-transparent text-[length:var(--text-7xl-font-semibold-font-size)] text-center tracking-[var(--text-7xl-font-semibold-letter-spacing)] leading-[var(--text-7xl-font-semibold-line-height)] [font-style:var(--text-7xl-font-semibold-font-style)] shadow-box-shadow-shadow-2xl">
          Quality you can trust.
          <br />
          And build on.
        </h2>

        <p className="relative max-w-[580px] font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] text-center tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
          You can trust that all of the designs are taking the full advantage of
          newest Figma&apos;s features and that code is written following best
          practices out there.
        </p>
      </div>

      <div className="relative w-full max-w-[1248px] h-[535px] z-0">
        <div className="absolute w-[calc(100%_+_433px)] top-[-285px] left-[-217px] h-[1069px] flex">
          <div className="mt-[298px] w-[963px] h-[289px] ml-[375px] bg-[#05966999] rounded-[481.5px/144.5px] blur-[156px]" />
        </div>

        <img
          className="absolute w-[calc(100%_-_202px)] top-[-5681px] left-[624px] h-[539px]"
          alt="Ellipse"
          src="/ellipse-33.svg"
        />

        <img
          className="absolute top-[-5681px] left-[624px] w-[1046px] h-[539px]"
          alt="Group"
          src="/group-5.png"
        />

        <img
          className="absolute w-[calc(100%_-_202px)] top-[-5681px] left-[624px] h-[539px]"
          alt="Ellipse"
          src="/ellipse-32.svg"
        />

        <div className="absolute w-full left-0 bottom-0 h-[434px] bg-[linear-gradient(180deg,rgba(9,9,11,0)_0%,rgba(9,9,11,1)_86%)]" />
      </div>
    </section>
  );
};
