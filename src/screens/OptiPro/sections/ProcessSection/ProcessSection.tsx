import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
    {
        number: "1",
        title: "Analyse",
        description: "Nous identifions votre objectif métier, votre audience cible et les actions que doit générer votre site. Nous auditons vos outils existants et définissons les points de connexion.",
    },
    {
        number: "2",
        title: "Construction",
        description: "Nous développons le site, connectons vos systèmes et configurons le suivi de performance. Vous validez chaque étape avant passage à la suivante.",
    },
    {
        number: "3",
        title: "Mise en production",
        description: "Nous déployons le site en conditions réelles, vérifions le bon fonctionnement de chaque intégration et vous transférons la documentation complète.",
    },
];

export const ProcessSection = (): JSX.Element => {
    return (
        <section id="fonctionnement" className="flex flex-col max-w-[1312px] items-center gap-16 px-8 py-24 relative w-full bg-zinc-950">
            <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-tighter leading-tight [font-style:var(--text-5xl-font-semibold-font-style)] text-center">
                Comment nous procédons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
                {steps.map((step, index) => (
                    <Card key={index} className="group bg-zinc-900/40 border-zinc-800 hover:border-emerald-500/30 transition-all duration-300">
                        <CardContent className="p-8 flex flex-col gap-6">
                            <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                                {step.number}
                            </div>
                            <h3 className="font-text-xl-font-semibold text-neutral-50 group-hover:text-emerald-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="font-text-base-font-normal text-zinc-400 leading-relaxed">
                                {step.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
