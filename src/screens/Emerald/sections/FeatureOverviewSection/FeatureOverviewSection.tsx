import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeatureOverviewSection = (): JSX.Element => {
  const userData = {
    name: "Felix Beaumont",
    handle: "@felixbs",
    avatarUrl: "/avatar.svg",
    avatarFallback: "FB",
  };

  const postContent = [
    { text: "Digging into ", className: "text-zinc-400" },
    { text: "@launchui", className: "text-emerald-300" },
    {
      text: ". Those shadows are giving me serious design envy.",
      className: "text-zinc-400",
    },
  ];

  return (
    <Card className="flex flex-col max-w-[421px] items-start gap-6 p-6 rounded-xl overflow-hidden border-none bg-[linear-gradient(180deg,rgba(250,250,250,0.04)_0%,rgba(250,250,250,0.02)_100%)] relative w-full before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-xl before:[background:linear-gradient(180deg,rgba(250,250,250,0.1)_0%,rgba(250,250,250,0.05)_6%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
        <div className="flex items-center gap-3 w-full">
          <Avatar className="w-12 h-12">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback>{userData.avatarFallback}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start flex-1">
            <h3 className="font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-semibold-font-size)] tracking-[var(--text-lg-font-semibold-letter-spacing)] leading-[var(--text-lg-font-semibold-line-height)] [font-style:var(--text-lg-font-semibold-font-style)]">
              {userData.name}
            </h3>

            <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
              {userData.handle}
            </p>
          </div>
        </div>

        <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)] w-full">
          {postContent.map((segment, index) => (
            <span
              key={index}
              className={`${segment.className} font-text-base-font-normal [font-style:var(--text-base-font-normal-font-style)] font-[number:var(--text-base-font-normal-font-weight)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] text-[length:var(--text-base-font-normal-font-size)]`}
            >
              {segment.text}
            </span>
          ))}
        </p>
      </CardContent>
    </Card>
  );
};
