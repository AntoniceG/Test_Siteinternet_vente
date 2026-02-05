import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
    return (
        <section id="contact" className="flex flex-col max-w-[1312px] items-center gap-10 px-8 py-32 relative w-full bg-zinc-950">
            <div className="flex flex-col items-center gap-6 max-w-[800px] text-center">
                <h2 className="font-text-5xl-font-semibold font-[number:var(--text-5xl-font-semibold-font-weight)] text-neutral-50 text-[length:var(--text-5xl-font-semibold-font-size)] tracking-[var(--text-5xl-font-semibold-letter-spacing)] leading-[var(--text-5xl-font-semibold-line-height)] [font-style:var(--text-5xl-font-semibold-font-style)]">
                    Vérifier si cette approche correspond à votre situation
                </h2>
                <p className="font-text-xl-font-medium font-[number:var(--text-xl-font-medium-font-weight)] text-zinc-400 text-[length:var(--text-xl-font-medium-font-size)] tracking-[var(--text-xl-font-medium-letter-spacing)] leading-[var(--text-xl-font-medium-line-height)] [font-style:var(--text-xl-font-medium-font-style)]">
                    Nous échangeons 30 minutes pour comprendre votre contexte, vos objectifs et la pertinence de notre méthode pour votre activité. Aucun engagement, aucune présentation commerciale.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button
                    asChild
                    className="px-8 py-6 rounded-md shadow-box-shadow-shadow bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.8)_100%)] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-900 text-lg hover:bg-[linear-gradient(180deg,rgba(250,250,250,0.95)_0%,rgba(250,250,250,0.75)_100%)]"
                >
                    <a href="mailto:contact@optipro.fr">Prendre rendez-vous</a>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="px-8 py-6 rounded-md border-zinc-700 bg-transparent text-white text-lg hover:bg-zinc-800"
                >
                    <a href="tel:+33123456789">Nous appeler</a>
                </Button>
            </div>
        </section>
    );
};
