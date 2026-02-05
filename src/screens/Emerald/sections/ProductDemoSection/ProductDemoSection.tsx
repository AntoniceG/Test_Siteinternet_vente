import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    title: "100+ sections and components",
    description:
      "All the elements you need t build a modern, responsive, and accessible landing page.",
    visual: "globe",
  },
  {
    title: "You're in control",
    description:
      "This is not a component library. It's a collection of re-usable components that you can copy and paste into your apps.",
    visual: "circles",
  },
];

export const ProductDemoSection = (): JSX.Element => {
  return (
    <section className="flex flex-wrap min-h-[496px] items-stretch gap-4 w-full">
      {featureCards.map((card, index) => (
        <Card
          key={index}
          className={`${index === 0 ? "w-full lg:w-[560px]" : "min-w-[360px] flex-1"} flex flex-col bg-[#fafafa05] rounded-xl overflow-hidden border-none relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.05)_0%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none`}
        >
          <CardContent className="flex flex-col h-full p-6 gap-6">
            <header className="flex flex-col gap-2 max-w-[460px]">
              <h3 className="font-[number:var(--text-2xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-2xl-font-semibold-font-size)] leading-[var(--text-2xl-font-semibold-line-height)] font-text-2xl-font-semibold tracking-[var(--text-2xl-font-semibold-letter-spacing)] [font-style:var(--text-2xl-font-semibold-font-style)]">
                {card.title}
              </h3>
              <p className="font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] leading-[var(--text-base-font-normal-line-height)] font-text-base-font-normal tracking-[var(--text-base-font-normal-letter-spacing)] [font-style:var(--text-base-font-normal-font-style)]">
                {card.description}
              </p>
            </header>

            <div
              className={`flex flex-col flex-1 ${card.visual === "globe" ? "pt-32" : "pt-16"} relative`}
            >
              <div className="relative flex-1">
                {card.visual === "globe" ? (
                  <>
                    <div className="absolute top-[calc(50%_-_180px)] left-[calc(50%_-_180px)] w-[360px] h-[360px] flex opacity-50">
                      <div className="flex-1 w-[360px] bg-[#05966999] rounded-[180px] rotate-180 blur-[200px] opacity-70" />
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_3845px)] left-[calc(50%_+_344px)] w-[353px] h-[353px]"
                      alt="Globe"
                      src="/globe.svg"
                    />
                    <img
                      className="absolute top-[calc(50%_-_3845px)] left-[calc(50%_+_344px)] w-[237px] h-[487px]"
                      alt="Ellipse"
                      src="/ellipse-1.svg"
                    />
                    <img
                      className="absolute top-[calc(50%_-_3845px)] left-[calc(50%_+_344px)] w-[173px] h-[432px]"
                      alt="Ellipse"
                      src="/ellipse-2.svg"
                    />
                  </>
                ) : (
                  <>
                    <div className="absolute top-[calc(50%_-_180px)] left-[calc(50%_-_180px)] w-[360px] h-[360px] flex">
                      <div className="mt-[58px] ml-[58px] mr-[58px] flex-1 mb-[58px] w-[244px] bg-[#05966999] rounded-[122px] rotate-180 blur-[200px] opacity-70" />
                    </div>
                    <div className="flex w-[356px] h-[356px] items-center gap-2 p-2 absolute top-[calc(50%_-_178px)] left-[calc(50%_-_178px)] rounded-full overflow-hidden border border-solid border-[#fafafa0d]">
                      <div className="items-center gap-2 p-2 flex-1 grow rounded-full overflow-hidden border border-solid border-[#fafafa0d] flex relative self-stretch">
                        <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch grow rounded-full overflow-hidden border border-solid border-[#fafafa1a]">
                          <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa1a]">
                            <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa33]">
                              <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa33]">
                                <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa4c]">
                                  <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa4c]">
                                    <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa66]">
                                      <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa66]">
                                        <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa80]">
                                          <div className="flex flex-col items-start gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden border border-solid border-[#fafafa80]">
                                            <div className="flex flex-col items-center justify-center gap-2 p-2 relative flex-1 self-stretch w-full grow rounded-full overflow-hidden shadow-box-shadow-shadow-2xl bg-[linear-gradient(180deg,rgba(5,150,105,0.6)_0%,rgba(5,150,105,0.1)_100%)]">
                                              <div className="flex items-center justify-center gap-2 relative flex-1 self-stretch w-full grow mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-full border border-solid border-[#ffffff1a] bg-[linear-gradient(0deg,rgba(250,250,250,0.05)_0%,rgba(250,250,250,0.2)_100%)]">
                                                <div className="flex w-16 h-16 items-center gap-2 relative shadow-glow-emerald-sm">
                                                  <div className="relative flex-1 self-stretch grow rounded">
                                                    <img
                                                      className="top-[-5907.81%] left-[-400%] absolute w-[133.33%] h-[133.33%]"
                                                      alt="Favicon"
                                                      src="/favicon.svg"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
