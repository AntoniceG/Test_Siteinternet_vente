import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const CustomerTestimonialSection = (): JSX.Element => {
  const testimonialData = {
    avatar: "/avatar.svg",
    name: "Darius Flynn",
    handle: "@flynnn",
    testimonialParts: [
      { text: "Exploring ", className: "text-zinc-400" },
      { text: "@launchui", className: "text-emerald-300" },
      {
        text: "'s sleek UI. It's like a dark mode enthusiast's playground.",
        className: "text-zinc-400",
      },
    ],
  };

  return (
    <Card className="w-full max-w-[421px] rounded-xl overflow-hidden border-none bg-[linear-gradient(180deg,rgba(250,250,250,0.04)_0%,rgba(250,250,250,0.02)_100%)] relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.1)_0%,rgba(250,250,250,0.05)_6%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={testimonialData.avatar}
                alt={testimonialData.name}
                className="object-cover"
              />
            </Avatar>

            <div className="flex flex-col flex-1">
              <h3 className="font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-semibold-font-size)] tracking-[var(--text-lg-font-semibold-letter-spacing)] leading-[var(--text-lg-font-semibold-line-height)] [font-style:var(--text-lg-font-semibold-font-style)]">
                {testimonialData.name}
              </h3>

              <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                {testimonialData.handle}
              </p>
            </div>
          </div>

          <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
            {testimonialData.testimonialParts.map((part, index) => (
              <span
                key={index}
                className={`${part.className} font-text-base-font-normal [font-style:var(--text-base-font-normal-font-style)] font-[number:var(--text-base-font-normal-font-weight)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] text-[length:var(--text-base-font-normal-font-size)]`}
              >
                {part.text}
              </span>
            ))}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
