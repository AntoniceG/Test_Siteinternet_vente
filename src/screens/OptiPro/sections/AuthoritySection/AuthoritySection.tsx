import { Card, CardContent } from "../../../../components/ui/card";
import { Lightbulb, Zap, Target, PieChart } from "lucide-react";

const secrets = [
    {
        icon: <Zap className="w-8 h-8" />,
        title: "La règle des 3 secondes",
        description: "Un visiteur juge votre sérieux dans les 3 premières secondes. Notre design premium impose instantanément une image de leader."
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Le focus local BTP",
        description: "Nous n'attirons pas n'importe qui. Nous configurons vos outils pour capturer uniquement les projets rentables dans votre zone."
    },
    {
        icon: <PieChart className="w-8 h-8" />,
        title: "Data vs Intuition",
        description: "Chaque bouton, chaque texte est placé là où l'œil s'arrête. Nous utilisons la science du regard pour guider vers le contact."
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Zéro barrière",
        description: "Nous éliminons tous les frictions : formulaires trop longs, lenteur mobile, navigation complexe. Le chemin vers vous est direct."
    }
];

export const AuthoritySection = (): JSX.Element => {
    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-16 px-8 py-24 relative w-full bg-zinc-950">
            <div className="flex flex-col items-start gap-4 w-full">
                <p className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-sm">Expertise Métier</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter max-w-2xl">
                    Pourquoi nos sites convertissent mieux que la moyenne
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {secrets.map((secret, index) => (
                    <Card key={index} className="bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900 hover:border-emerald-500/20 transition-all duration-300 group">
                        <CardContent className="p-8 flex flex-col gap-6">
                            <div className="text-zinc-500 group-hover:text-emerald-500 transition-colors">
                                {secret.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{secret.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {secret.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
