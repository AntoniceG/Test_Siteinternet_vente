import { CheckCircle2Icon, UsersIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FeatureTileSection = (): JSX.Element => {
  return (
    <Card className="min-w-60 max-w-[420px] flex-1 grow flex flex-col items-start gap-6 p-6 relative bg-[#fafafa05] rounded-xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_0%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col items-start gap-6 w-full p-0">
        <header className="flex flex-col items-start gap-2 w-full">
          <div className="flex justify-start gap-2 w-full items-center">
            <UsersIcon className="w-4 h-4 text-neutral-50" />
            <h2 className="flex items-center justify-start flex-1 font-[number:var(--text-xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-xl-font-semibold-font-size)] leading-[var(--text-xl-font-semibold-line-height)] font-text-xl-font-semibold tracking-[var(--text-xl-font-semibold-letter-spacing)] [font-style:var(--text-xl-font-semibold-font-style)]">
              Team
            </h2>
          </div>
          <p className="w-full font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
            For teams and agencies working
            <br />
            on cool products together
          </p>
        </header>

        <div className="flex items-center gap-2 w-full">
          <div className="inline-flex items-baseline gap-2">
            <span className="font-text-base-font-semibold font-[number:var(--text-base-font-semibold-font-weight)] text-zinc-400 text-[length:var(--text-base-font-semibold-font-size)] tracking-[var(--text-base-font-semibold-letter-spacing)] leading-[var(--text-base-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-base-font-semibold-font-style)]">
              $
            </span>
            <span className="font-text-6xl-font-semibold font-[number:var(--text-6xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-6xl-font-semibold-font-size)] tracking-[var(--text-6xl-font-semibold-letter-spacing)] leading-[var(--text-6xl-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-6xl-font-semibold-font-style)]">
              0
            </span>
          </div>
          <div className="flex flex-col items-start pt-1.5 pb-0 px-0 flex-1">
            <span className="w-full font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-neutral-50 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              one-time payment
            </span>
            <span className="w-full font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              plus local taxes
            </span>
          </div>
        </div>

        <Button
          asChild
          className="w-full rounded-md border-[none] bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.1)_100%)] hover:bg-[linear-gradient(0deg,rgba(250,250,250,0.08)_0%,rgba(250,250,250,0.13)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_16%,rgba(250,250,250,0.05)_86%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <a
            className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]"
            href="https://www.launchuicomponents.com/pricing"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get all-access for your team
          </a>
        </Button>

        <p className="w-full font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
          Free and open-source forever
        </p>

        <Separator className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <CheckCircle2Icon className="w-4 h-4 text-neutral-50 flex-shrink-0" />
            <p className="flex items-center justify-start flex-1 font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-neutral-50 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              All the templates, components and sections available for your
              entire team
            </p>
          </div>
        </div>
      </CardContent>

      <div className="bg-[#fafafa4c] absolute top-[-79px] left-1 w-[482px] h-36 rounded-[240.75px/72.25px] blur-[78px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent pointer-events-none" />
    </Card>
  );
};
