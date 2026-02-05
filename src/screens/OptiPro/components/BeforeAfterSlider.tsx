import React, { useState } from "react";

export const BeforeAfterSlider = (): JSX.Element => {
    const [position, setPosition] = useState(50);

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        const container = e.currentTarget.getBoundingClientRect();
        const x = ("touches" in e) ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const scrollLeft = x - container.left;
        const percentage = (scrollLeft / container.width) * 100;
        setPosition(Math.min(Math.max(percentage, 0), 100));
    };

    return (
        <section className="flex flex-col max-w-[1312px] items-center gap-16 px-8 py-24 relative w-full bg-zinc-950">
            <div className="flex flex-col items-center gap-4 text-center max-w-[800px]">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                    Le saut qualitatif OptiPro
                </h2>
                <p className="text-zinc-400 text-lg">
                    Comparez votre présence actuelle avec le standard premium que nous délivrons.
                </p>
            </div>

            <div
                className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative cursor-col-resize select-none border border-zinc-800"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
            >
                {/* "After" - Premium Site (The Base) */}
                <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-6 md:p-12 text-center border-l border-emerald-500 shadow-2xl">
                    <div className="max-w-xl space-y-6 md:space-y-8 animate-fade-in">
                        <div className="w-12 md:w-16 h-1 bg-emerald-500 mx-auto" />
                        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">L'EXCELLENCE DU BTP</h3>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="p-4 md:p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                                <p className="text-emerald-400 text-xl md:text-2xl font-bold">100%</p>
                                <p className="text-zinc-500 text-[10px] md:text-xs">Converti</p>
                            </div>
                            <div className="p-4 md:p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
                                <p className="text-emerald-400 text-xl md:text-2xl font-bold">Ultra</p>
                                <p className="text-zinc-500 text-[10px] md:text-xs">Rapide</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-4 md:top-8 right-4 md:right-8 bg-emerald-500 text-zinc-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Après
                    </div>
                </div>

                {/* "Before" - Old Site (The Overlay) */}
                <div
                    className="absolute inset-0 bg-neutral-200 overflow-hidden"
                    style={{ width: `${position}%` }}
                >
                    <div className="w-[100vw] max-w-[1312px] h-full flex flex-col items-center justify-center p-6 md:p-12 text-center text-neutral-800">
                        <div className="max-w-xl space-y-4 md:space-y-6 grayscale opacity-60">
                            <h3 className="text-xl md:text-3xl font-serif">Bienvenue sur mon site</h3>
                            <p className="text-sm md:text-lg">Nous réalisons tous types de travaux de bâtiment dans toute la France. Appelez-nous au 06...</p>
                            <div className="flex gap-2 md:gap-4 justify-center">
                                <div className="w-12 h-12 md:w-24 md:h-24 bg-neutral-300" />
                                <div className="w-12 h-12 md:w-24 md:h-24 bg-neutral-300" />
                                <div className="w-12 h-12 md:w-24 md:h-24 bg-neutral-300" />
                            </div>
                        </div>
                        <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-zinc-800 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            Avant
                        </div>
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-30"
                    style={{ left: `${position}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                        <div className="flex gap-1">
                            <div className="w-1 h-4 bg-zinc-400 rounded-full" />
                            <div className="w-1 h-4 bg-zinc-400 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
