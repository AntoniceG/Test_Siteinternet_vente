import { CheckIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const features = [
  { text: "9 landing page sections" },
  { text: "36 components" },
  { text: "5 custom animations" },
];

export const InfoTileSection = (): JSX.Element => {
  return (
    <Card className="min-w-60 max-w-[420px] flex-1 bg-[#fafafa05] rounded-xl overflow-hidden border-none relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col items-start gap-6 p-6">
        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex justify-center gap-2 self-stretch w-full items-center">
            <h2 className="flex items-center justify-center flex-1 font-[number:var(--text-xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-xl-font-semibold-font-size)] leading-[var(--text-xl-font-semibold-line-height)] font-text-xl-font-semibold tracking-[var(--text-xl-font-semibold-letter-spacing)] [font-style:var(--text-xl-font-semibold-font-style)]">
              Free
            </h2>
          </div>

          <p className="self-stretch font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] leading-[var(--text-base-font-normal-line-height)] font-text-base-font-normal tracking-[var(--text-base-font-normal-letter-spacing)] [font-style:var(--text-base-font-normal-font-style)]">
            For everyone starting out on a<br />
            website for their big idea
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch w-full">
          <div className="inline-flex h-[66px] items-baseline gap-2">
            <span className="w-fit font-text-base-font-semibold font-[number:var(--text-base-font-semibold-font-weight)] text-zinc-400 text-[length:var(--text-base-font-semibold-font-size)] tracking-[var(--text-base-font-semibold-letter-spacing)] leading-[var(--text-base-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-base-font-semibold-font-style)]">
              $
            </span>

            <span className="w-fit font-text-6xl-font-semibold font-[number:var(--text-6xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-6xl-font-semibold-font-size)] tracking-[var(--text-6xl-font-semibold-letter-spacing)] leading-[var(--text-6xl-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-6xl-font-semibold-font-style)]">
              0
            </span>
          </div>

          <div className="flex flex-col items-start pt-1.5 pb-0 px-0 flex-1">
            <span className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-neutral-50 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              free
            </span>

            <span className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              for everyone
            </span>
          </div>
        </div>

        <Button
          asChild
          className="w-full rounded-md border-none bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.1)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_16%,rgba(250,250,250,0.05)_86%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[linear-gradient(0deg,rgba(250,250,250,0.08)_0%,rgba(250,250,250,0.15)_100%)]"
        >
          <a
            className="flex w-full items-center justify-center px-4 py-2.5 font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-medium-font-style)]"
            href="https://www.launchuicomponents.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get started for free
          </a>
        </Button>

        <p className="self-stretch font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
          Free and open-source forever
        </p>

        <Separator className="w-full bg-zinc-800" />

        <div className="flex flex-col items-start gap-2 self-stretch w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 self-stretch w-full"
            >
              <CheckIcon className="w-4 h-4 text-neutral-50 flex-shrink-0" />

              <span className="flex items-center justify-center flex-1 font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-neutral-50 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
