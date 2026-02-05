import { Card, CardContent } from "../../../../components/ui/card";

const situations = [
    "Votre site existe depuis plusieurs années mais ne génère aucun contact qualifié. Vous ne savez pas si le problème vient du design, du référencement ou du message.",
    "Vous utilisez plusieurs outils (site, CRM, formulaires, analytics) sans vision claire de ce qui fonctionne. Les données sont dispersées et exploitées manuellement.",
    "Vous avez besoin d'une présence en ligne professionnelle mais vous hésitez entre une agence coûteuse et une solution automatisée sans accompagnement.",
    "Votre concurrent direct apparaît avant vous sur Google. Vous savez que cela vous coûte des opportunités mais vous ne savez pas par où commencer.",
    "Vous recevrez des demandes de renseignement mais peu de prospects qualifiés. Le tri manuel consomme du temps sans garantie de résultat.",
];

export const SituationsSection = (): JSX.Element => {
    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-16 px-8 py-24 relative w-full bg-zinc-950">
            <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-tighter leading-tight [font-style:var(--text-5xl-font-semibold-font-style)] text-center max-w-[800px]">
                Situations que nous rencontrons régulièrement
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {situations.map((situation, index) => (
                    <Card key={index} className="group bg-zinc-900/40 border-zinc-800 hover:border-emerald-500/30 hover:bg-zinc-800/40 transition-all duration-300">
                        <CardContent className="p-8">
                            <p className="font-text-base-font-normal text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {situation}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
