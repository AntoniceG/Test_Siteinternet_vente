import { useState, useEffect } from "react";
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
import { ContactForm } from "./components/ContactForm";
import { LeadNotification } from "./components/LeadNotification";
import { ROICalculator } from "./components/ROICalculator";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { AuthoritySection } from "./sections/AuthoritySection/AuthoritySection";
import { AIChatbot } from "./components/AIChatbot";

export const OptiPro = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-full max-w-[1440px] mx-auto flex bg-zinc-950 relative overflow-hidden">
            {/* Scroll Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-emerald-500 z-[200] transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Interactive Mouse Glow */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.05), transparent 80%)`
                }}
            />

            <div className="flex flex-col items-center relative flex-1 w-full">
                <NavigationBarSection onContactClick={openModal} />
                <HeroSection onContactClick={openModal} />
                <PartnerLogosSection />
                <BeforeAfterSlider />
                <SituationsSection />
                <FeaturesSection />
                <ROICalculator onContactClick={openModal} />
                <AuthoritySection />
                <ProcessSection />
                <ComparisonSection />
                <FaqSection />
                <CallToActionSection onContactClick={openModal} />
                <FooterSection />
            </div>

            <ContactForm isOpen={isModalOpen} onClose={closeModal} />
            <LeadNotification />
            <AIChatbot />
        </div>
    );
};
