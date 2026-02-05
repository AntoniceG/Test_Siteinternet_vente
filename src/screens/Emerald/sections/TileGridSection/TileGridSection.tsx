import { CheckCircle2Icon, UserIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const features = [
  "66 landing page sections",
  "126 components",
  "16 illustrations",
  "15 custom animations",
];

export const TileGridSection = (): JSX.Element => {
  return (
    <Card className="min-w-60 max-w-[420px] h-[541px] flex-1 grow flex flex-col items-start gap-6 p-6 relative bg-[#fafafa05] rounded-xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_0%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col items-start gap-6 w-full p-0">
        <header className="flex flex-col items-start gap-2 w-full">
          <div className="flex justify-center gap-2 self-stretch w-full items-center">
            <UserIcon className="w-4 h-4" />
            <h2 className="flex items-center justify-center flex-1 font-[number:var(--text-xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-xl-font-semibold-font-size)] leading-[var(--text-xl-font-semibold-line-height)] font-text-xl-font-semibold tracking-[var(--text-xl-font-semibold-letter-spacing)] [font-style:var(--text-xl-font-semibold-font-style)]">
              Pro
            </h2>
          </div>
          <p className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
            For early-stage founders,
            <br />
            solopreneurs and indie devs
          </p>
        </header>

        <div className="flex items-center gap-2 self-stretch w-full">
          <div className="inline-flex h-[66px] items-baseline gap-2">
            <span className="w-fit font-text-base-font-semibold font-[number:var(--text-base-font-semibold-font-weight)] text-zinc-400 text-[length:var(--text-base-font-semibold-font-size)] tracking-[var(--text-base-font-semibold-letter-spacing)] leading-[var(--text-base-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-base-font-semibold-font-style)]">
              $
            </span>
            <span className="w-fit font-text-6xl-font-semibold font-[number:var(--text-6xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-6xl-font-semibold-font-size)] tracking-[var(--text-6xl-font-semibold-letter-spacing)] leading-[var(--text-6xl-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-6xl-font-semibold-font-style)]">
              0
            </span>
          </div>
          <div className="flex flex-col items-start pt-1.5 pb-0 px-0 flex-1 grow">
            <p className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-neutral-50 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              one-time payment
            </p>
            <p className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              plus local taxes
            </p>
          </div>
        </div>

        <Button
          asChild
          className="w-full rounded-md shadow-box-shadow-shadow bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.8)_100%)] hover:bg-[linear-gradient(180deg,rgba(250,250,250,0.95)_0%,rgba(250,250,250,0.75)_100%)] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-900 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]"
        >
          <a
            href="https://www.launchuicomponents.com/pricing"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get all-access
          </a>
        </Button>

        <p className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
          Free and open-source forever
        </p>

        <Separator className="self-stretch w-full bg-zinc-800" />

        <ul className="flex flex-col items-start gap-2 self-stretch w-full">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 self-stretch w-full"
            >
              <CheckCircle2Icon className="w-4 h-4 text-neutral-50 flex-shrink-0" />
              <span className="flex items-center justify-center flex-1 font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-neutral-50 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <div className="bg-[#fb923c99] absolute top-[-79px] left-1 w-[482px] h-36 rounded-[240.75px/72.25px] blur-[78px] pointer-events-none" />
      <img
        className="left-[203px] absolute w-[calc(100%_-_152px)] top-0 h-px pointer-events-none"
        alt="Shine"
        src="/shine-1.svg"
      />
    </Card>
  );
};
