import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqs = [
    {
        question: "Sécurité des données",
        answer: "Vos données restent votre propriété. Hébergement en Europe (France ou Allemagne), conformité RGPD par défaut, sauvegardes quotidiennes, accès sécurisés. Vous pouvez exporter ou supprimer vos données à tout moment.",
    },
    {
        question: "Dépendance technologique",
        answer: "Le code source vous appartient. Vous pouvez faire évoluer le site avec un autre prestataire ou en interne. Architecture standard, documentation complète, formation incluse. Aucun système propriétaire.",
    },
    {
        question: "Réversibilité",
        answer: "Vous pouvez arrêter à tout moment sans perte de données. Export complet de votre base, récupération du code, transfert vers un autre hébergeur. Pas de clause d'exclusivité, pas de verrouillage technique.",
    },
    {
        question: "Intégration avec vos outils",
        answer: "Compatibilité native avec les principaux CRM (HubSpot, Salesforce, Pipedrive), outils emailing (Mailchimp, Brevo) et systèmes de paiement. Connexion testée avant mise en production.",
    },
];

export const FaqSection = (): JSX.Element => {
    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-16 px-8 py-24 relative w-full bg-zinc-950">
            <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
                Questions fréquentes
            </h2>

            <div className="w-full max-w-[800px]">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-zinc-800 bg-zinc-900/30 rounded-xl px-4"
                        >
                            <AccordionTrigger className="text-left font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-neutral-50 hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};
