import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqItems = [
  {
    question: "Is Launch UI easy to customise?",
    value: "item-1",
  },
  {
    question: "Is Launch UI optimized for search engines?",
    value: "item-2",
  },
  {
    question: "How does Launch UI compare to no-code tools?",
    value: "item-3",
  },
  {
    question: "Why not just coding a website yourself?",
    value: "item-4",
  },
  {
    question: "Can I get a refund if I don't like it?",
    value: "item-5",
  },
  {
    question: "What features will be added in the future?",
    value: "item-6",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-[1312px] items-center gap-24 px-8 py-20 w-full bg-zinc-950">
      <div className="max-w-[720px] gap-12 flex flex-col items-center w-full">
        <h2 className="self-stretch [text-shadow:0px_25px_50px_-12px_#00000040] font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] text-center tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)] shadow-box-shadow-shadow-2xl">
          Questions and Answers
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-[#ffffff1a] py-4"
            >
              <AccordionTrigger className="flex items-center justify-between gap-3 w-full hover:no-underline">
                <span className="font-text-base-font-medium font-[number:var(--text-base-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-base-font-medium-font-size)] tracking-[var(--text-base-font-medium-letter-spacing)] leading-[var(--text-base-font-medium-line-height)] [font-style:var(--text-base-font-medium-font-style)] text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
