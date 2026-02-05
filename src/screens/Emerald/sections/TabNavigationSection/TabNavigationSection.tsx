import { BlocksIcon, PaletteIcon, SquarePenIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const tabItems = [
  {
    icon: BlocksIcon,
    title: "Choose your sections",
    description:
      "Choose among 100+ components to build a landing page suited to the needs of your product.",
    isActive: true,
  },
  {
    icon: SquarePenIcon,
    title: "Add your content",
    description:
      "Fill the blanks with screenshots, videos, and other content featuring your product.",
    isActive: false,
  },
  {
    icon: PaletteIcon,
    title: "Customize",
    description:
      "Make design yours in no time by changing the variables that control colors, typography, and other styles.",
    isActive: false,
  },
];

export const TabNavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[1312px] w-full items-center gap-24 px-8 py-20 bg-zinc-950">
      <header className="gap-8 self-stretch z-[1] flex flex-col items-center w-full">
        <h2 className="max-w-[1248px] w-full [text-shadow:0px_25px_50px_-12px_#00000040] bg-[linear-gradient(157deg,rgba(250,250,250,1)_0%,rgba(161,161,170,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-transparent text-[length:var(--text-5xl-font-semibold-font-size)] text-center tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)] shadow-box-shadow-shadow-2xl">
          Make the right impression
        </h2>

        <p className="max-w-[578px] w-full font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] text-center tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
          Launch UI makes it easy to build an unforgetable website that
          resonates with professional design-centric audiences.
        </p>
      </header>

      <div className="flex flex-wrap items-start justify-center gap-4 flex-1 self-stretch w-full z-0">
        <nav className="flex flex-col w-[373px] items-start gap-3">
          {tabItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`flex items-start gap-2 pl-3 pr-5 py-3 w-full rounded-md transition-all ${
                  item.isActive
                    ? "border-[none] bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_16%,rgba(250,250,250,0.05)_86%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative"
                    : ""
                }`}
              >
                <div className="inline-flex gap-2.5 p-0.5 items-center flex-shrink-0">
                  <Icon
                    className={`w-4 h-4 ${item.isActive ? "text-neutral-50" : "text-zinc-400"}`}
                  />
                </div>

                <div className="flex flex-col items-start justify-center flex-1">
                  <div
                    className={`flex items-center justify-center self-stretch font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)] ${
                      item.isActive ? "text-neutral-50" : "text-zinc-400"
                    }`}
                  >
                    {item.title}
                  </div>

                  <div className="flex items-center justify-center font-text-xs-font-medium font-[number:var(--text-xs-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xs-font-medium-font-size)] tracking-[var(--text-xs-font-medium-letter-spacing)] leading-[var(--text-xs-font-medium-line-height)] self-stretch [font-style:var(--text-xs-font-medium-font-style)]">
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        <Card className="flex flex-col min-w-60 h-[482px] items-start gap-2.5 p-8 flex-1 bg-[#fafafa05] rounded-xl overflow-hidden border border-solid border-[#ffffff1a]">
          <CardContent className="p-0 w-full h-full">
            <div className="relative self-stretch w-full h-[850px] mb-[-32.00px] rounded-xl">
              <div className="absolute w-[calc(100%_+_465px)] top-[-285px] left-[-217px] h-[1069px]">
                <div className="absolute w-[calc(100%_-_750px)] top-[298px] left-[375px] h-[289px] bg-[#fb923c99] rounded-[255px/144.5px] blur-[156px]" />

                <div className="absolute w-[calc(100%_-_750px)] top-[303px] left-[375px] h-[148px] bg-orange-300 rounded-[255px/74px] blur-[32px]" />
              </div>

              <div className="flex flex-col w-full items-start gap-2.5 pt-2 pb-0 px-2 absolute top-0 left-0 bg-[#fafafa1a] rounded-2xl">
                <img
                  className="h-[476.13px] relative self-stretch w-full object-cover"
                  alt="Image"
                  src="/image-1.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
