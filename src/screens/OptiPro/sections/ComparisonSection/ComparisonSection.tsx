export const ComparisonSection = (): JSX.Element => {
    const rows = [
        {
            criterium: "Temps de mise en place",
            manual: "6 à 12 mois",
            agency: "3 à 6 mois",
            ours: "4 à 8 semaines",
        },
        {
            criterium: "Connexion avec vos outils",
            manual: "Exports manuels",
            agency: "Sur devis séparé",
            ours: "Incluse et automatisée",
        },
        {
            criterium: "Modifications futures",
            manual: "Vous gérez seul",
            agency: "Facturation horaire",
            ours: "Tarif forfaitaire défini",
        },
        {
            criterium: "Dépendance technique",
            manual: "Aucune",
            agency: "Forte",
            ours: "Faible (code documenté)",
        },
        {
            criterium: "Suivi de performance",
            manual: "Tableaux Excel",
            agency: "Google Analytics seul",
            ours: "Dashboard métier intégré",
        },
    ];

    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-12 px-8 py-24 relative w-full bg-zinc-950">
            <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)] text-center">
                Ce qui nous différencie
            </h2>

            <div className="w-full overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/20">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="text-left p-6 text-base font-semibold text-neutral-50">Critère</th>
                            <th className="text-left p-6 text-base font-semibold text-zinc-400">Solution manuelle</th>
                            <th className="text-left p-6 text-base font-semibold text-zinc-400">Agence web classique</th>
                            <th className="text-left p-6 text-base font-semibold text-emerald-400 bg-emerald-400/5">Notre approche</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} className="border-b border-zinc-900 last:border-0 hover:bg-zinc-800/10 transition-colors">
                                <td className="p-6 text-sm font-medium text-neutral-50">{row.criterium}</td>
                                <td className="p-6 text-sm text-zinc-400">{row.manual}</td>
                                <td className="p-6 text-sm text-zinc-400">{row.agency}</td>
                                <td className="p-6 text-sm text-emerald-300 bg-emerald-400/5 font-medium">{row.ours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
