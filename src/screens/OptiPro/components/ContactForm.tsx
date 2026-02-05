import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps): JSX.Element | null => {
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-zoom-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {!submitted ? (
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Prendre rendez-vous</h3>
                        <p className="text-zinc-400 mb-8">Laissez-nous vos coordonnées, nous vous recontacterons sous 24h.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Nom complet</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Jean Dupont"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Email professionnel</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="jean@entreprise-btp.fr"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Téléphone</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="06 12 34 56 78"
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>

                            <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold py-6 rounded-lg flex items-center justify-center gap-2 group transition-all">
                                Envoyer la demande
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="p-12 flex flex-col items-center text-center animate-fade-in">
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">C'est envoyé !</h3>
                        <p className="text-zinc-400">Nous vous rappellerons très prochainement pour échanger sur votre projet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
