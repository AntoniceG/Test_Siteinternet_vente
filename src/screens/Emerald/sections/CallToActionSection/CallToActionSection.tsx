import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[1312px] items-center gap-24 px-8 py-0 relative w-full bg-zinc-950">
      <div className="gap-12 pt-32 pb-48 px-0 self-stretch z-[1] flex flex-col items-center relative w-full">
        <h2 className="relative flex items-center justify-center max-w-[1248px] w-full font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] text-center tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
          Start building
        </h2>

        <div className="inline-flex items-start gap-4 relative">
          <Button
            asChild
            className="gap-2 px-4 py-2 rounded-md shadow-box-shadow-shadow bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.8)_100%)] hover:bg-[linear-gradient(180deg,rgba(250,250,250,0.95)_0%,rgba(250,250,250,0.75)_100%)] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-900 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]"
          >
            <a
              href="https://www.launchuicomponents.com/#subscribe"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get started
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="gap-2 px-4 py-2 rounded-md border-[none] bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.1)_100%)] hover:bg-[linear-gradient(0deg,rgba(250,250,250,0.08)_0%,rgba(250,250,250,0.15)_100%)] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_16%,rgba(250,250,250,0.05)_86%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <a
              href="https://github.com/launch-ui/launch-ui"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute w-full left-0 bottom-0 h-[280px] z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[calc(50.00%_-_482px)] bottom-[-307px] w-[963px] h-[289px] bg-[#05966999] rounded-[481.5px/144.5px] blur-[156px]" />

        <div className="absolute left-[calc(50.00%_-_482px)] bottom-[-171px] w-[963px] h-[148px] bg-emerald-300 rounded-[481.5px/74px] blur-[32px]" />
      </div>
    </section>
  );
};
