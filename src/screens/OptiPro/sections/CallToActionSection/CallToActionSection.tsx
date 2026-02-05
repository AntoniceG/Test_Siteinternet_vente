import { Button } from "../../../../components/ui/button";

interface CallToActionSectionProps {
    onContactClick: () => void;
}

export const CallToActionSection = ({ onContactClick }: CallToActionSectionProps): JSX.Element => {
    return (
        <section id="contact" className="flex flex-col max-w-[1312px] items-center gap-10 px-8 py-32 relative w-full bg-zinc-950 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -bottom-1/2 left-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="flex flex-col items-center gap-6 max-w-[800px] text-center relative z-10">
                <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-tighter leading-tight [font-style:var(--text-5xl-font-semibold-font-style)]">
                    Vérifier si cette approche correspond à votre situation
                </h2>
                <p className="font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
                    Nous échangeons 30 minutes pour comprendre votre contexte, vos objectifs et la pertinence de notre méthode pour votre activité.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                <Button
                    onClick={onContactClick}
                    className="group relative px-8 py-6 rounded-md shadow-box-shadow-shadow bg-white text-zinc-900 text-lg hover:bg-zinc-100 transition-all overflow-hidden"
                >
                    <span className="relative z-10">Prendre rendez-vous</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-950/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="px-8 py-6 rounded-md border-zinc-800 bg-zinc-900/30 text-white text-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                >
                    <a href="tel:+33123456789">Nous appeler</a>
                </Button>
            </div>
        </section>
    );
};
