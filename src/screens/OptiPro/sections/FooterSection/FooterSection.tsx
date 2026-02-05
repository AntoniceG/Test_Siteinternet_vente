export const FooterSection = (): JSX.Element => {
    return (
        <footer className="flex flex-col max-w-[1312px] items-start gap-12 px-8 py-20 relative w-full bg-zinc-950 border-t border-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
                <div className="flex flex-col gap-6 col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded bg-neutral-50 flex items-center justify-center">
                            <div className="w-4 h-4 bg-zinc-950 rounded-sm"></div>
                        </div>
                        <span className="font-text-lg-font-bold font-[number:var(--text-lg-font-bold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-bold-font-size)] tracking-[var(--text-lg-font-bold-letter-spacing)] leading-[var(--text-lg-font-bold-line-height)] [font-style:var(--text-lg-font-bold-font-style)]">
                            OptiPro
                        </span>
                    </div>
                    <p className="font-text-base-font-normal font-[number:var(--text-base-font-normal-font-weight)] text-zinc-400 text-[length:var(--text-base-font-normal-font-size)] tracking-[var(--text-base-font-normal-letter-spacing)] leading-[var(--text-base-font-normal-line-height)] [font-style:var(--text-base-font-normal-font-style)] max-w-[400px]">
                        Sites internet professionnels et systèmes de génération de leads pour entreprises B2B. Approche factuelle, résultats mesurables.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-neutral-50">Légal</h3>
                    <a href="#" className="font-text-sm-font-normal text-zinc-400 hover:text-neutral-50">Mentions légales</a>
                    <a href="#" className="font-text-sm-font-normal text-zinc-400 hover:text-neutral-50">Confidentialité</a>
                    <a href="#" className="font-text-sm-font-normal text-zinc-400 hover:text-neutral-50">CGV</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-neutral-50">Contact</h3>
                    <a href="mailto:contact@optipro.fr" className="font-text-sm-font-normal text-zinc-400 hover:text-neutral-50">contact@optipro.fr</a>
                    <a href="tel:+33123456789" className="font-text-sm-font-normal text-zinc-400 hover:text-neutral-50">+33 1 23 45 67 89</a>
                    <p className="font-text-sm-font-normal text-zinc-500">SARL au capital de 10 000€<br />Paris, France</p>
                </div>
            </div>

            <div className="pt-8 border-t border-zinc-900 w-full text-center">
                <p className="font-text-sm-font-normal text-zinc-500">
                    © 2024 OptiPro. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};
