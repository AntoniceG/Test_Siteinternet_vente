import { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";

const notifications = [
    "Une entreprise d'électricité à Lyon vient de générer 5 leads.",
    "Nouveau projet lancé pour un couvreur à Bordeaux.",
    "Un menuisier a augmenté son CA de 25% en 2 mois.",
    "3 nouveaux contacts qualifiés pour une agence de plomberie.",
    "Diagnostic de conversion terminé pour un façadier."
];

export const LeadNotification = (): JSX.Element | null => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show after 5 seconds
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);

        // Cycle notifications
        const cycle = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % notifications.length);
                setVisible(true);
            }, 500);
        }, 12000);

        return () => {
            clearTimeout(timer);
            clearInterval(cycle);
        };
    }, []);

    if (!visible && index === 0) return null;

    return (
        <div
            className={`fixed bottom-6 left-6 z-[60] max-w-[320px] hidden md:block transition-all duration-500 transform ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
        >
            <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-1">
                    <p className="text-zinc-50 font-medium text-sm leading-tight">
                        {notifications[index]}
                    </p>
                    <p className="text-zinc-500 text-[10px] mt-1 font-bold uppercase tracking-widest">À l'instant</p>
                </div>
                <button
                    onClick={() => setVisible(false)}
                    className="text-zinc-500 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};
