import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[1312px] items-center gap-24 pt-20 pb-0 px-8 w-full bg-zinc-950">
      <div className="gap-12 self-stretch z-[1] flex flex-col items-center w-full">
        <Badge
          variant="outline"
          className="inline-flex gap-2 px-2.5 py-1 rounded-full border-[#ffffff33] bg-transparent text-zinc-400 hover:bg-transparent"
        >
          <span className="font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] [font-style:var(--text-xs-font-semibold-font-style)]">
            New version of Launch UI is out!
          </span>
          <div className="inline-flex items-center gap-1">
            <a
              className="font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] [font-style:var(--text-xs-font-semibold-font-style)] hover:underline"
              href="https://www.launchuicomponents.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read more
            </a>
            <ArrowRightIcon className="w-3 h-3" />
          </div>
        </Badge>

        <h1 className="max-w-[1248px] [text-shadow:0px_25px_50px_-12px_#00000040] bg-[linear-gradient(157deg,rgba(250,250,250,1)_0%,rgba(161,161,170,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-text-8xl-font-semibold font-[number:var(--text-8xl-font-semibold-font-weight)] text-transparent text-[length:var(--text-8xl-font-semibold-font-size)] text-center tracking-[var(--text-8xl-font-semibold-letter-spacing)] leading-[var(--text-8xl-font-semibold-line-height)] [font-style:var(--text-8xl-font-semibold-font-style)] shadow-box-shadow-shadow-2xl">
          Give your big idea the website it deserves
        </h1>

        <p className="max-w-[544px] font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] text-center tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
          Landing page kit template with React, Shadcn/ui and Tailwind that you
          can copy/paste into your project.
        </p>

        <div className="inline-flex items-start gap-4">
          <Button
            asChild
            className="gap-2 px-4 py-2 rounded-md shadow-box-shadow-shadow bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.8)_100%)] hover:bg-[linear-gradient(180deg,rgba(250,250,250,0.9)_0%,rgba(250,250,250,0.7)_100%)] text-zinc-900 font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]"
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
            className="gap-2 px-4 py-2 rounded-md border-[none] bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.1)_100%)] hover:bg-[linear-gradient(0deg,rgba(250,250,250,0.08)_0%,rgba(250,250,250,0.15)_100%)] text-neutral-50 font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_16%,rgba(250,250,250,0.05)_86%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
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

      <div className="z-0 rounded-xl relative flex-1 self-stretch w-full grow min-h-[600px]">
        <div className="absolute w-[calc(100%_+_465px)] top-[-285px] left-[-217px] h-[1069px]">
          <div className="absolute w-[calc(100%_-_750px)] top-[298px] left-[375px] h-[289px] bg-[#05966999] rounded-[481.5px/144.5px] blur-[156px]" />
          <div className="absolute w-[calc(100%_-_750px)] top-[303px] left-[375px] h-[148px] bg-emerald-300 rounded-[481.5px/74px] blur-[32px]" />
        </div>

        <div className="flex flex-col w-full items-start gap-2.5 pt-2 pb-0 px-2 absolute top-0 left-0 bg-[#fafafa1a] rounded-2xl">
          <img
            className="h-[196px] self-stretch w-full object-cover"
            alt="Dashboard preview"
            src="/image.png"
          />
        </div>

        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(9,9,11,0)_0%,rgba(9,9,11,0.9)_86%)]" />
      </div>
    </section>
  );
};
