import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const techIcons = [
  {
    src: "/react-1.svg",
    alt: "React",
    top: "top-[calc(50.00%_-_54px)]",
    left: "left-[calc(50.00%_+_54px)]",
  },
  {
    src: "/tailwind-1.svg",
    alt: "Tailwind",
    top: "top-[calc(50.00%_-_54px)]",
    left: "left-[calc(50.00%_-_162px)]",
  },
  {
    src: "/typescript-1.svg",
    alt: "Typescript",
    top: "top-[calc(50.00%_-_108px)]",
    left: "left-[calc(50.00%_+_162px)]",
  },
  {
    src: "/figma-1.svg",
    alt: "Figma",
    top: "top-[calc(50.00%_-_108px)]",
    left: "left-[calc(50.00%_-_54px)]",
  },
  {
    src: "/shadcn-1.svg",
    alt: "Shadcn",
    top: "top-[50.00%]",
    left: "left-[calc(50.00%_-_54px)]",
  },
];

const gradientBoxes = [
  {
    top: "top-[calc(50.00%_+_5px)]",
    left: "left-[calc(50.00%_-_266px)]",
    gradient:
      "bg-[linear-gradient(270deg,rgba(9,9,11,0.3)_0%,rgba(9,9,11,0)_100%)]",
  },
  {
    top: "top-[calc(50.00%_-_158px)]",
    left: "left-[calc(50.00%_+_58px)]",
    gradient:
      "bg-[linear-gradient(0deg,rgba(9,9,11,0.3)_0%,rgba(9,9,11,0)_100%)]",
  },
  {
    top: "top-[calc(50.00%_-_158px)]",
    left: "left-[calc(50.00%_-_158px)]",
    gradient:
      "bg-[linear-gradient(0deg,rgba(9,9,11,0.3)_0%,rgba(9,9,11,0)_100%)]",
  },
  {
    top: "top-[calc(50.00%_+_58px)]",
    left: "left-[calc(50.00%_-_158px)]",
    gradient:
      "bg-[linear-gradient(180deg,rgba(9,9,11,0.3)_0%,rgba(9,9,11,0)_100%)]",
  },
  {
    top: "top-[calc(50.00%_+_58px)]",
    left: "left-[calc(50.00%_+_58px)]",
    gradient:
      "bg-[linear-gradient(180deg,rgba(9,9,11,0.3)_0%,rgba(9,9,11,0)_100%)]",
  },
  {
    top: "top-[calc(50.00%_+_4px)]",
    left: "left-[calc(50.00%_+_166px)]",
    gradient:
      "bg-[linear-gradient(90deg,rgba(9,9,11,0.3)_0%,rgba(9,9,11,0)_100%)]",
  },
];

const chatMessages = [
  {
    text: "We need to update this heading before launch",
    top: "top-[calc(50.00%_-_122px)]",
    left: "left-0",
  },
  {
    text: "Let me quickly jump into Sanity and fix it",
    top: "top-[calc(50.00%_+_16px)]",
    left: "right-0",
  },
  {
    text: "Done!",
    top: "top-[calc(50.00%_+_56px)]",
    left: "right-0",
  },
];

export const DemoWrapperSection = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center gap-4 w-full relative">
      <Card className="min-w-[360px] h-[560px] flex-1 flex flex-col gap-6 p-6 bg-[#fafafa05] rounded-xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_0%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col gap-6 p-0 flex-1">
          <div className="flex flex-col gap-2 w-full max-w-[460px]">
            <h2 className="font-[number:var(--text-2xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-2xl-font-semibold-font-size)] leading-[var(--text-2xl-font-semibold-line-height)] font-text-2xl-font-semibold tracking-[var(--text-2xl-font-semibold-letter-spacing)] [font-style:var(--text-2xl-font-semibold-font-style)]">
              Fits right into your stack
            </h2>

            <div className="flex flex-col h-20 gap-2">
              <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                Built with modern web technologies and tools that fit right into
                any React project.
              </p>

              <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                No bloat, no extra dependencies, no risk of conflicts.
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full relative">
            <div className="absolute top-[calc(50.00%_-_180px)] left-[calc(50.00%_-_180px)] w-[360px] h-[360px] flex opacity-50">
              <div className="flex-1 w-[360px] bg-[#05966999] rounded-[180px] rotate-180 blur-[200px]" />
            </div>

            {gradientBoxes.map((box, index) => (
              <div
                key={`gradient-${index}`}
                className={`absolute ${box.top} ${box.left} w-[84px] h-[84px] rounded-xl ${box.gradient}`}
              />
            ))}

            {techIcons.map((icon, index) => (
              <div
                key={`icon-${index}`}
                className={`absolute ${icon.top} ${icon.left} w-[92px] h-[92px] flex items-center justify-center rounded-xl overflow-hidden border-4 border-solid border-[#09090b33] bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(250,250,250,0.05)_100%)]`}
              >
                <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-[560px] h-[560px] flex flex-col gap-6 p-6 bg-[#fafafa05] rounded-xl overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_0%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <CardContent className="flex flex-col gap-6 p-0 flex-1">
          <div className="flex flex-col gap-2 w-full max-w-[460px]">
            <h2 className="font-[number:var(--text-2xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-2xl-font-semibold-font-size)] leading-[var(--text-2xl-font-semibold-line-height)] font-text-2xl-font-semibold tracking-[var(--text-2xl-font-semibold-letter-spacing)] [font-style:var(--text-2xl-font-semibold-font-style)]">
              Data-agnostic
            </h2>

            <div className="flex flex-col h-20 gap-2">
              <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                All the data is separate from components so you can edit it in
                seconds or make it dynamic.
              </p>

              <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                Easily connect to a CMS of your choice.
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full relative">
            <div className="flex flex-col items-center justify-center gap-2 px-6 py-0 flex-1 w-full">
              <div className="relative w-full h-[261px]">
                {chatMessages.map((message, index) => (
                  <div
                    key={`message-${index}`}
                    className={`inline-flex flex-col items-center justify-center gap-2 px-3 py-2 absolute ${message.top} ${message.left} rounded-xl overflow-hidden border-[none] bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_16%,rgba(250,250,250,0.05)_86%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
                  >
                    <div className="flex items-center justify-center font-text-xs-font-medium font-[number:var(--text-xs-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xs-font-medium-font-size)] tracking-[var(--text-xs-font-medium-letter-spacing)] leading-[var(--text-xs-font-medium-line-height)] [font-style:var(--text-xs-font-medium-font-style)]">
                      {message.text}
                    </div>
                  </div>
                ))}

                <div className="absolute top-[214px] left-[258px] w-[61px] h-[47px] flex items-center justify-end gap-[358.8px] shadow-box-shadow-shadow-xl">
                  <img
                    className="h-[27.15px] w-[19.2px]"
                    alt="Ellipse"
                    src="/ellipse-30.svg"
                  />

                  <Badge className="mt-[23.4px] h-6 w-[53px] items-center justify-center gap-3 px-2 py-1 bg-neutral-50 rounded-[7.2px] border-[1.2px] border-solid border-zinc-300">
                    <span className="font-text-xs-font-medium font-[number:var(--text-xs-font-medium-font-weight)] text-zinc-900 text-[length:var(--text-xs-font-medium-font-size)] tracking-[var(--text-xs-font-medium-letter-spacing)] leading-[var(--text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-medium-font-style)]">
                      Erik D.
                    </span>
                  </Badge>
                </div>

                <div className="absolute top-14 left-0 w-[69px] h-[47px] flex items-center gap-[92.8px] shadow-box-shadow-shadow-xl">
                  <img
                    className="h-[27.15px] w-[19.2px] -ml-28"
                    alt="Ellipse"
                    src="/ellipse-30-1.svg"
                  />

                  <Badge className="mt-[23.4px] h-6 w-[61px] items-center justify-center gap-3 px-2 py-1 bg-emerald-600 rounded-[7.2px] border-[1.2px] border-solid border-emerald-300 shadow-glow-emerald-lg">
                    <span className="font-text-xs-font-medium font-[number:var(--text-xs-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-xs-font-medium-font-size)] text-right tracking-[var(--text-xs-font-medium-letter-spacing)] leading-[var(--text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-medium-font-style)]">
                      Sofia G.
                    </span>
                  </Badge>
                </div>
              </div>

              <div className="absolute top-[calc(50.00%_-_180px)] left-[calc(50.00%_-_180px)] w-[360px] h-[360px] opacity-50">
                <div className="h-full bg-[#05966999] rounded-[180px] rotate-180 blur-[200px] opacity-70" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
