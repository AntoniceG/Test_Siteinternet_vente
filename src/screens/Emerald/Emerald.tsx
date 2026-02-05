import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContentNodeSection } from "./sections/ContentNodeSection";
import { CustomerTestimonialSection } from "./sections/CustomerTestimonialSection/CustomerTestimonialSection";
import { DashboardPreviewSection } from "./sections/DashboardPreviewSection";
import { DemoWrapperSection } from "./sections/DemoWrapperSection/DemoWrapperSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection/FeatureHighlightSection";
import { FeatureOverviewSection } from "./sections/FeatureOverviewSection/FeatureOverviewSection";
import { FeatureTileSection } from "./sections/FeatureTileSection/FeatureTileSection";
import { HeroSection } from "./sections/HeroSection";
import { InfoTileSection } from "./sections/InfoTileSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { PartnerLogosSection } from "./sections/PartnerLogosSection/PartnerLogosSection";
import { ProductDemoSection } from "./sections/ProductDemoSection";
import { RisingFeaturesSection } from "./sections/RisingFeaturesSection/RisingFeaturesSection";
import { SectionTitleSection } from "./sections/SectionTitleSection/SectionTitleSection";
import { TabNavigationSection } from "./sections/TabNavigationSection/TabNavigationSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { TestimonialsWrapperSection } from "./sections/TestimonialsWrapperSection";
import { TileGridSection } from "./sections/TileGridSection/TileGridSection";
import { UserFeedbackSection } from "./sections/UserFeedbackSection";

const features = [
  {
    icon: "/scan-face.svg",
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliment, made with best a11y practices",
  },
  {
    icon: "/monitor-smartphone.svg",
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
  },
  {
    icon: "/eclipse.svg",
    title: "Light and dark mode",
    description: "Seamless switching between color schemes, 6 themes included",
  },
  {
    icon: "/blocks.svg",
    title: "Easy to customize",
    description: "Flexible options to match your  product or brand",
  },
  {
    icon: "/fast-forward.svg",
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
  },
  {
    icon: "/rocket.svg",
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
  },
  {
    icon: "/languages.svg",
    title: "Made for localisation",
    description: "Easy to implement support for multiple languages and regions",
  },
  {
    icon: "/square-pen-1.svg",
    title: "CMS friendly",
    description:
      "Built to work with your any headless content management system",
  },
];

const footerSections = [
  {
    title: "Product",
    links: ["Changelog", "Documentation"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Contact",
    links: ["Github", "Discord", "Twitter"],
  },
];

const toolbarIcons = [
  { src: "/icon-start.svg", alt: "Icon start", highlighted: false },
  { src: "/icon-start.svg", alt: "Icon start", highlighted: false },
  { src: "/icon-start.svg", alt: "Icon start", highlighted: false },
  { src: "/icon-start.svg", alt: "Icon start", highlighted: false },
  { src: "/icon-start.svg", alt: "Icon start", highlighted: true },
];

const toolbarIconsSecondary = [
  { src: "/icon-start-3.svg", alt: "Icon start", highlighted: true },
  { src: "/icon-start-2.svg", alt: "Icon start", highlighted: false },
  { src: "/icon-start-4.svg", alt: "Icon start", highlighted: false },
];

export const Emerald = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex">
      <div className="flex flex-1 w-full relative items-start justify-center rounded-3xl gap-2 overflow-hidden">
        <div className="flex flex-col items-start relative flex-1 w-full">
          <div className="flex flex-col w-full items-center relative bg-zinc-950">
            <NavigationBarSection />
            <HeroSection />
            <PartnerLogosSection />

            <section className="flex flex-col max-w-[1312px] items-start gap-12 px-8 py-20 relative w-full bg-zinc-950">
              <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
                Build a better website, faster.
              </h2>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                <ProductDemoSection />
                <DemoWrapperSection />
              </div>
            </section>

            <section className="flex flex-col max-w-[1312px] items-center gap-20 px-8 py-20 relative w-full bg-zinc-950">
              <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] text-center tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
                Everything you need.
                <br />
                Nothing you don&apos;t.
              </h2>

              <div className="flex flex-wrap items-start gap-12 w-full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="flex flex-col min-w-60 flex-1 bg-transparent border-0 shadow-none"
                  >
                    <CardContent className="flex flex-col items-start gap-2 p-0">
                      <div className="flex items-center gap-2 w-full">
                        <img
                          className="w-6 h-6"
                          alt={feature.title}
                          src={feature.icon}
                        />
                        <h3 className="flex-1 font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-semibold-font-size)] tracking-[var(--text-lg-font-semibold-letter-spacing)] leading-[var(--text-lg-font-semibold-line-height)] [font-style:var(--text-lg-font-semibold-font-style)]">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <RisingFeaturesSection />
            <TabNavigationSection />

            <section className="flex flex-col max-w-[1312px] items-center gap-20 px-8 py-20 relative w-full bg-zinc-950">
              <SectionTitleSection />
              <div className="flex flex-col items-center overflow-hidden gap-6 relative self-stretch w-full">
                <div className="flex items-start justify-center gap-6 relative self-stretch w-full">
                  <TestimonialsSection />
                  <TestimonialsWrapperSection />
                  <FeatureOverviewSection />
                  <FeatureHighlightSection />
                </div>

                <div className="flex items-start justify-center gap-6 relative self-stretch w-full">
                  <ContentNodeSection />
                  <CustomerTestimonialSection />
                  <UserFeedbackSection />
                </div>

                <div className="absolute h-[calc(100%_-_176px)] top-[88px] right-[-88px] w-[376px] -rotate-90 bg-[linear-gradient(180deg,rgba(9,9,11,0)_0%,rgba(9,9,11,1)_86%)] pointer-events-none" />
                <div className="absolute h-[calc(100%_-_176px)] top-[88px] left-[-88px] w-[376px] rotate-90 bg-[linear-gradient(180deg,rgba(9,9,11,0)_0%,rgba(9,9,11,1)_86%)] pointer-events-none" />
              </div>
            </section>

            <section className="flex flex-col max-w-[1312px] w-full items-center gap-12 px-8 py-20 relative bg-zinc-950">
              <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] text-center tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
                Build your dream landing page, today.
              </h2>

              <p className="max-w-[594px] font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] text-center tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
                Get lifetime access to all the components. No recurring fees.
                Just simple, transparent pricing.
              </p>

              <div className="flex flex-wrap items-start justify-center gap-4 relative self-stretch w-full">
                <InfoTileSection />
                <TileGridSection />
                <FeatureTileSection />
              </div>
            </section>

            <FaqSection />
            <CallToActionSection />

            <footer className="max-w-[1312px] p-8 w-full bg-zinc-950 flex flex-col items-start gap-4 relative">
              <div className="flex flex-wrap items-start gap-4 pt-12 pb-24 px-0 relative self-stretch w-full border-b border-[#ffffff1a]">
                <div className="flex min-w-[104px] items-center gap-2 relative flex-1">
                  <div className="relative w-6 h-6 rounded overflow-hidden">
                    <img
                      className="absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      alt="Favicon"
                      src="/favicon.svg"
                    />
                  </div>
                  <span className="font-text-lg-font-bold font-[number:var(--text-lg-font-bold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-bold-font-size)] tracking-[var(--text-lg-font-bold-letter-spacing)] leading-[var(--text-lg-font-bold-line-height)] whitespace-nowrap [font-style:var(--text-lg-font-bold-font-style)]">
                    Launch UI
                  </span>
                </div>

                {footerSections.map((section, index) => (
                  <nav
                    key={index}
                    className="min-w-[104px] flex-1 flex flex-col items-start gap-4 relative"
                  >
                    <h3 className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                      {section.title}
                    </h3>
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)] hover:text-neutral-50 transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                ))}

                <div className="flex flex-col min-w-[104px] items-start justify-center gap-4 relative flex-1 opacity-0 pointer-events-none">
                  <div className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                    Contact
                  </div>
                  <div className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Github
                  </div>
                  <div className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Discord
                  </div>
                  <div className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Twitter
                  </div>
                </div>

                <div className="flex flex-col min-w-[104px] items-start justify-center gap-4 relative flex-1 opacity-0 pointer-events-none">
                  <div className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                    Contact
                  </div>
                  <div className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Github
                  </div>
                  <div className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Discord
                  </div>
                  <div className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Twitter
                  </div>
                </div>
              </div>

              <DashboardPreviewSection />
            </footer>
          </div>
        </div>

        <div className="inline-flex items-center p-2 fixed left-1/2 -translate-x-1/2 bottom-4 rounded-xl backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(250,250,250,0.1)_0%,rgba(250,250,250,0.1)_100%),linear-gradient(0deg,rgba(9,9,11,0.5)_0%,rgba(9,9,11,0.5)_100%)] gap-2 overflow-hidden shadow-backdrop-blur-backdrop-blur-xl z-50">
          <div className="inline-flex items-center gap-0.5">
            {toolbarIcons.map((icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`p-2 rounded-md ${
                  icon.highlighted ? "bg-[#fafafa1a]" : ""
                }`}
              >
                <img className="w-4 h-4" alt={icon.alt} src={icon.src} />
              </Button>
            ))}
          </div>

          <Separator orientation="vertical" className="h-auto bg-white/10" />

          <div className="inline-flex items-center gap-0.5">
            {toolbarIconsSecondary.map((icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`p-2 rounded-md ${
                  icon.highlighted ? "bg-[#fafafa1a]" : ""
                }`}
              >
                <img className="w-4 h-4" alt={icon.alt} src={icon.src} />
              </Button>
            ))}
          </div>

          <Separator orientation="vertical" className="h-auto bg-white/10" />

          <Button
            variant="default"
            className="px-4 py-2 rounded-md shadow-box-shadow-shadow bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.8)_100%)] hover:bg-[linear-gradient(180deg,rgba(250,250,250,0.9)_0%,rgba(250,250,250,0.7)_100%)]"
            asChild
          >
            <a
              className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-900 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-medium-font-style)]"
              href="https://www.launchuicomponents.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live preview
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
