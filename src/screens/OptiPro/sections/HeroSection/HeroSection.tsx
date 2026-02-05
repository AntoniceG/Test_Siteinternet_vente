import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

import { Dashboard } from "../../components/Dashboard";

interface HeroSectionProps {
    onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps): JSX.Element => {
    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-24 pt-20 pb-0 px-8 w-full bg-zinc-950 relative overflow-hidden">
            {/* Background Mesh Glows - Animated */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute w-[800px] h-[400px] top-[-100px] left-[-200px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute w-[600px] h-[300px] bottom-[-50px] right-[-100px] bg-emerald-900/20 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
            </div>

            <div className="gap-12 self-stretch z-[1] flex flex-col items-center w-full">
                <Badge
                    variant="outline"
                    className="inline-flex gap-2 px-3 py-1.5 rounded-full border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/80 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] [font-style:var(--text-xs-font-semibold-font-style)]">
                            Méthodologie éprouvée sur 40+ projets B2B
                        </span>
                    </div>
                </Badge>

                <h1 className="max-w-[1100px] [text-shadow:0px_25px_50px_-12px_#00000040] bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-8xl font-bold text-center tracking-tighter leading-[1.1] animate-fade-in px-4">
                    Sites internet professionnels qui génèrent des contacts qualifiés
                </h1>

                <p className="max-w-[644px] font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] text-center tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)] opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    Vous obtenez un site opérationnel, optimisé pour la conversion et
                    connecté à vos outils métier. Sans reconstruction, sans dépendance
                    technique.
                </p>

                <div className="inline-flex items-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <Button
                        onClick={onContactClick}
                        className="group relative gap-2 px-8 py-4 rounded-md shadow-box-shadow-shadow bg-white text-zinc-950 font-text-sm-font-medium text-lg hover:bg-zinc-100 transition-all overflow-hidden"
                    >
                        <span className="relative z-10">Parler de votre projet</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="px-8 py-4 rounded-md border-zinc-800 bg-zinc-900/30 text-white text-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                    >
                        <a href="#leads">Génération de leads</a>
                    </Button>
                </div>
            </div>

            <div className="z-10 relative flex-1 self-stretch w-full grow mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="p-px bg-gradient-to-b from-zinc-800 to-transparent rounded-2xl shadow-2xl">
                    <Dashboard />
                </div>
            </div>
        </section>
    );
};
