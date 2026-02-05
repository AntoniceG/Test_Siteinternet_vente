import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { TrendingUp, Calculator, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface ROICalculatorProps {
    onContactClick: () => void;
}

export const ROICalculator = ({ onContactClick }: ROICalculatorProps): JSX.Element => {
    const [basket, setBasket] = useState(8000); // Panier moyen
    const [conversion, setConversion] = useState(3); // Taux de conversion supplémentaire
    const leadsPerMonth = 15; // Estimation prudente

    const annualGain = leadsPerMonth * 12 * basket * (conversion / 100);

    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-16 px-8 py-24 relative w-full bg-zinc-950">
            <div className="flex flex-col items-center gap-4 text-center max-w-[800px]">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                    Calculez votre retour sur investissement
                </h2>
                <p className="text-zinc-400 text-lg">
                    Entrez vos chiffres réels pour estimer le gain annuel potentiel avec une interface OptiPro optimisée.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* Inputs */}
                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm h-full">
                    <CardContent className="p-8 flex flex-col gap-10">
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-zinc-300 font-medium">Panier moyen par chantier</label>
                                <span className="text-emerald-400 font-bold text-xl">{basket.toLocaleString()} €</span>
                            </div>
                            <input
                                type="range"
                                min="1000"
                                max="50000"
                                step="500"
                                value={basket}
                                onChange={(e) => setBasket(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>1 000 €</span>
                                <span>50 000 €</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-zinc-300 font-medium">Gain de conversion estimé</label>
                                <span className="text-emerald-400 font-bold text-xl">+{conversion} %</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                step="1"
                                value={conversion}
                                onChange={(e) => setConversion(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>+1 % (Prudent)</span>
                                <span>+10 % (Optimisé)</span>
                            </div>
                        </div>

                        <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                * Basé sur une moyenne de 15 nouveaux contacts qualifiés par mois générés par nos systèmes.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Results */}
                <Card className="bg-emerald-500 text-zinc-950 border-none shadow-[0_0_50px_rgba(16,185,129,0.2)] h-full overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Calculator className="w-64 h-64" />
                    </div>

                    <CardContent className="p-10 flex flex-col justify-between h-full relative z-10">
                        <div className="space-y-2">
                            <p className="uppercase tracking-widest font-black text-emerald-900 text-sm">Gain annuel potentiel</p>
                            <h3 className="text-6xl md:text-7xl font-black tracking-tighter">
                                +{Math.round(annualGain).toLocaleString()}€
                            </h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 py-4 border-b border-emerald-900/10">
                                <div className="w-10 h-10 rounded-full bg-zinc-950/10 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-emerald-900" />
                                </div>
                                <p className="font-medium text-emerald-950">Croissance de votre marge nette</p>
                            </div>

                            <p className="text-emerald-900 font-medium leading-relaxed">
                                Ce calcul n'inclut pas la valeur liée à la notoriété et la recommandation naturelle générée par un site de prestige.
                            </p>

                            <Button
                                onClick={onContactClick}
                                className="w-full bg-zinc-950 text-white hover:bg-zinc-800 py-8 text-lg font-bold rounded-xl gap-2 group transition-all"
                            >
                                Obtenir mon audit complet
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
