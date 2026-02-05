import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { TrendingUp, Users, Euro } from "lucide-react";

export const Dashboard = (): JSX.Element => {
    const [activeMonth, setActiveMonth] = useState(11);
    const panierMoyen = 15000; // Secteur BTP

    const data = [
        { month: "Jan", leads: 4, ca: 60000 },
        { month: "Feb", leads: 6, ca: 90000 },
        { month: "Mar", leads: 8, ca: 120000 },
        { month: "Apr", leads: 12, ca: 180000 },
        { month: "May", leads: 15, ca: 225000 },
        { month: "Jun", leads: 18, ca: 270000 },
        { month: "Jul", leads: 22, ca: 330000 },
        { month: "Aug", leads: 20, ca: 300000 },
        { month: "Sep", leads: 28, ca: 420000 },
        { month: "Oct", leads: 35, ca: 525000 },
        { month: "Nov", leads: 42, ca: 630000 },
        { month: "Dec", leads: 54, ca: 810000 },
    ];

    return (
        <Card className="w-full bg-zinc-900 border-zinc-800 backdrop-blur-xl overflow-hidden group">
            <CardContent className="p-6 md:p-10 flex flex-col gap-10">
                {/* Header Dashboard */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h3 className="text-white text-2xl font-semibold tracking-tight">Potentiel de Croissance - Secteur BTP</h3>
                        <p className="text-zinc-400 text-sm mt-1 inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Estimation ROI sur 12 mois - Panier moyen {panierMoyen.toLocaleString()}€
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <Users className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div>
                                <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Leads / Mois</p>
                                <p className="text-white text-xl font-bold leading-none">{data[activeMonth].leads}</p>
                            </div>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Euro className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">CA Prévu</p>
                                <p className="text-white text-xl font-bold leading-none">{(data[activeMonth].ca / 1000).toFixed(0)}k€</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart Visualization */}
                <div className="relative h-[250px] w-full mt-8 flex items-end justify-between gap-2 md:gap-4 group/chart">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full opacity-50 pointer-events-none" />

                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="w-full h-px bg-zinc-800/50" />
                        ))}
                    </div>

                    {/* Bars */}
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="relative flex-1 flex flex-col items-center group/bar cursor-pointer h-full justify-end"
                            onMouseEnter={() => setActiveMonth(i)}
                        >
                            <div
                                className={`w-full max-w-[48px] rounded-t-[4px] transition-all duration-700 relative
                  ${activeMonth === i
                                        ? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)] scale-x-110'
                                        : 'bg-zinc-800 group-hover/chart:bg-zinc-700/80'}
                `}
                                style={{
                                    height: `${Math.max((item.leads / 60) * 100, 5)}%`, // Minimum 5% to be visible
                                }}
                            >
                                {/* Number inside or above the bar */}
                                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none
                  ${activeMonth === i ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'}
                `}>
                                    <div className="bg-white text-zinc-950 px-2 py-1 rounded text-[10px] font-black uppercase whitespace-nowrap shadow-xl">
                                        {item.leads} leads
                                    </div>
                                    <div className="w-2 h-2 bg-white rotate-45 mx-auto -mt-1" />
                                </div>
                            </div>
                            <p className={`text-[11px] mt-4 font-bold transition-all duration-300 ${activeMonth === i ? 'text-emerald-400 scale-110' : 'text-zinc-500'}`}>
                                {item.month}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-800 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-tighter">Accélération</p>
                            <p className="text-white font-bold text-lg">+1,250%<span className="text-zinc-500 text-xs font-normal ml-1">/an</span></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:col-span-2 bg-emerald-500/5 rounded-2xl p-4 border border-emerald-500/10 backdrop-blur-sm">
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            L'approche OptiPro élimine <span className="text-white font-semibold">l'incertitude commerciale</span>. Pour une entreprise du BTP, générer <span className="text-emerald-400 font-bold">{data[11].leads} contacts qualifiés</span> par mois représente un levier de croissance massif.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
