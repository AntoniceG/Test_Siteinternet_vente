import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { PartnerLogosSection } from "./sections/PartnerLogosSection/PartnerLogosSection";
import { SituationsSection } from "./sections/SituationsSection/SituationsSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { ComparisonSection } from "./sections/ComparisonSection/ComparisonSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const OptiPro = (): JSX.Element => {
    return (
        <div className="w-full max-w-[1440px] mx-auto flex bg-zinc-950">
            <div className="flex flex-col items-center relative flex-1 w-full">
                <NavigationBarSection />
                <HeroSection />
                <PartnerLogosSection />
                <SituationsSection />
                <FeaturesSection />
                <ProcessSection />
                <ComparisonSection />
                <FaqSection />
                <CallToActionSection />
                <FooterSection />
            </div>
        </div>
    );
};
