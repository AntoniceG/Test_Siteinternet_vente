import { Card, CardContent } from "../../../../components/ui/card";
import { BlocksIcon, FastForwardIcon, ShieldCheckIcon } from "lucide-react";

const mainFeatures = [
    {
        icon: <BlocksIcon className="w-6 h-6 text-emerald-500" />,
        title: "Nous éliminons l'incertitude technique",
        description: "Pas de dépendance à une agence. Vous gardez le contrôle total sur votre site et vos données. Chaque élément est documenté, transférable et modifiable.",
    },
    {
        icon: <FastForwardIcon className="w-6 h-6 text-emerald-500" />,
        title: "Nous simplifions l'infrastructure",
        description: "Un seul système connecte votre site, vos formulaires et votre CRM. Les données circulent automatiquement. Vous suivez ce qui fonctionne sans exports manuels.",
    },
    {
        icon: <ShieldCheckIcon className="w-6 h-6 text-emerald-500" />,
        title: "Nous garantissons la fiabilité",
        description: "Chaque fonctionnalité est testée avant mise en production. Le site fonctionne de manière prévisible. Les mises à jour n'interrompent pas votre activité.",
    },
];

export const FeaturesSection = (): JSX.Element => {
    return (
        <section id="solution" className="flex flex-col max-w-[1312px] items-center gap-20 px-8 py-24 relative w-full bg-zinc-950">
            <div className="flex flex-col items-center gap-6 max-w-[800px] text-center">
                <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-tighter leading-tight [font-style:var(--text-5xl-font-semibold-font-style)]">
                    Ce que nous faisons différemment
                </h2>
                <p className="font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
                    Nous construisons des sites internet qui répondent à un objectif métier précis : générer des contacts qualifiés de manière fiable et mesurable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {mainFeatures.map((feature, index) => (
                    <Card
                        key={index}
                        className="group flex flex-col bg-zinc-900/40 border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/40 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardContent className="flex flex-col items-start gap-4 p-8 relative z-10">
                            <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-semibold-font-size)] tracking-tight leading-[var(--text-lg-font-semibold-line-height)] [font-style:var(--text-lg-font-semibold-font-style)]">
                                {feature.title}
                            </h3>
                            <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-relaxed [font-style:var(--text-base-font-normal-font-style)]">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
