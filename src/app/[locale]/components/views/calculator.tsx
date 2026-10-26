'use client'

import { useState } from "react";

import { faGlobe, faLayerGroup, faCartShopping, faDesktop, faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslations } from "next-intl"

export default function Calculator(){

    const [selectedType, setSelectedType] = useState<"web" | "webApp" | "e-commerce" | "desktop">("web");
    const [selectedFuncs, setSelectedFuncs] = useState({
        auth: false,
        pays: false,
        admin: false,
        apis: false,
        ia: false
    });
    const [selectedPlan, setSelectedPlan] = useState<string>("0");

    const tCalculator = useTranslations("Calculator");

    const calculatePrices = () => {
        let baseMin = 180;
        let baseMax = 400;

        // tipo
        if (selectedType === "webApp") {
            baseMin = 350;
            baseMax = 750;
        } else if (selectedType === "e-commerce") {
            baseMin = 500;
            baseMax = 1000;
        } else if (selectedType === "desktop") {
            baseMin = 600;
            baseMax = 1200;
        }

        // extras
        const activeFuncsCount = Object.values(selectedFuncs).filter(Boolean).length;
        baseMin += activeFuncsCount * 80;
        baseMax += activeFuncsCount * 150;

        // plan
        const planCost = parseInt(selectedPlan, 10) || 0;
        baseMin += planCost;
        baseMax += planCost;

        return { min: baseMin, max: baseMax, count: activeFuncsCount };
    };

    const { min: minPrice, max: maxPrice, count: activeFuncsCount } = calculatePrices();

    // nombre de tipo
    const getTypeName = () => {
        switch (selectedType) {
            case "webApp": return tCalculator("Step1.tipo2");
            case "e-commerce": return tCalculator("Step1.tipo3");
            case "desktop": return tCalculator("Step1.tipo4");
            default: return tCalculator("Step1.tipo1");
        }
    };

    // nombre de plan
    const getPlanName = () => {
        if (selectedPlan === "50") return tCalculator("Step3.selected2");
        if (selectedPlan === "120") return tCalculator("Step3.selected3");
        return tCalculator("Step3.selected1");
    };

    return(
        <section id="cotizador" className="py-20 relative border-t border-amber/15 bg-primary-background/80">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span className="px-3 py-1 rounded-full bg-amber/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider font-heading" data-i18n="calc-badge">{tCalculator("span")}</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading" data-i18n="calc-title">{tCalculator("title")}</h2>
                    <p className="text-slate-400 text-sm sm:text-base" data-i18n="calc-subtitle">{tCalculator("subtitle")}</p>
                </div>

                <div className="bg-glass-card rounded-3xl p-6 sm:p-10 border-1 border-gold/25 hover:border-gold/60 shadow-[0_0_20px_-5px_rgba(255,119,0,0.25),_inset_0_0_15px_-8px_rgba(255,170,68,0.2)] hover:shadow-[0_0_30px_2px_rgba(255,119,0,0.45),_inset_0_0_20px_-3px_rgba(255,170,68,0.35)] transition-all duration-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        <div className="lg:col-span-2 space-y-6">

                            <div>
                                <label className="block text-sm font-bold text-white mb-3 font-heading" data-i18n="calc-step-1">1. {tCalculator("Step1.step")}</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    <button
                                        onClick={() => setSelectedType("web")} 
                                        type="button" className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                                            selectedType === "web"
                                                ? "bg-copper border-gold"
                                                : "bg-copper/30 border-slate-800 hover:border-gold"
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faGlobe} className="block text-lg mb-1 text-gold" />
                                        <p>{tCalculator("Step1.tipo1")}</p>
                                    </button>
                                    <button
                                        onClick={() => setSelectedType("webApp")} 
                                        type="button" className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                                            selectedType === "webApp"
                                                ? "bg-copper border-gold"
                                                : "bg-copper/30 border-slate-800 hover:border-gold"
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faLayerGroup} className="block text-lg mb-1 text-gold" />
                                        <p>{tCalculator("Step1.tipo2")}</p>
                                    </button>
                                    <button
                                        onClick={() => setSelectedType("e-commerce")} 
                                        type="button" className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                                            selectedType === "e-commerce"
                                                ? "bg-copper border-gold"
                                                : "bg-copper/30 border-slate-800 hover:border-gold"
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} className="block text-lg mb-1 text-gold" />
                                        <p>{tCalculator("Step1.tipo3")}</p>
                                    </button>
                                    <button
                                        onClick={() => setSelectedType("desktop")} 
                                        type="button" className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                                            selectedType === "desktop"
                                                ? "bg-copper border-gold"
                                                : "bg-copper/30 border-slate-800 hover:border-gold"
                                        }`}
                                    >
                                        <FontAwesomeIcon icon={faDesktop} className="block text-lg mb-1 text-gold" />
                                        <p>{tCalculator("Step1.tipo4")}</p>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-white mb-3 font-heading" data-i18n="calc-step-2">2. {tCalculator("Step2.step")}</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedFuncs(prev => ({ ...prev, auth: !prev.auth }))} 
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer ${
                                             selectedFuncs.auth
                                                ? "border-gold/40 bg-copper"
                                                : "border-slate-800 bg-copper/20 hover:border-gold/40"
                                            }`}
                                    >
                                        {selectedFuncs.auth
                                            ? <FontAwesomeIcon icon={faCircleCheck} className="text-gold" />
                                            : <FontAwesomeIcon icon={faCircle} />
                                        }
                                        <span>{tCalculator("Step2.func1")}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedFuncs(prev => ({ ...prev, pays: !prev.pays }))} 
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer ${
                                             selectedFuncs.pays
                                                ? "border-gold/40 bg-copper"
                                                : "border-slate-800 bg-copper/20 hover:border-gold/40"
                                            }`}
                                    >
                                        {selectedFuncs.pays
                                            ? <FontAwesomeIcon icon={faCircleCheck} className="text-gold" />
                                            : <FontAwesomeIcon icon={faCircle} />
                                        }
                                        <span>{tCalculator("Step2.func2")}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedFuncs(prev => ({ ...prev, admin: !prev.admin }))} 
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer ${
                                             selectedFuncs.admin
                                                ? "border-gold/40 bg-copper"
                                                : "border-slate-800 bg-copper/20 hover:border-gold/40"
                                            }`}
                                    >
                                        {selectedFuncs.admin
                                            ? <FontAwesomeIcon icon={faCircleCheck} className="text-gold" />
                                            : <FontAwesomeIcon icon={faCircle} />
                                        }
                                        <span>{tCalculator("Step2.func3")}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedFuncs(prev => ({ ...prev, apis: !prev.apis }))} 
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer ${
                                             selectedFuncs.apis
                                                ? "border-gold/40 bg-copper"
                                                : "border-slate-800 bg-copper/20 hover:border-gold/40"
                                            }`}
                                    >
                                        {selectedFuncs.apis
                                            ? <FontAwesomeIcon icon={faCircleCheck} className="text-gold" />
                                            : <FontAwesomeIcon icon={faCircle} />
                                        }
                                        <span>{tCalculator("Step2.func4")}</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedFuncs(prev => ({ ...prev, ia: !prev.ia }))} 
                                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer ${
                                             selectedFuncs.ia
                                                ? "border-gold/40 bg-copper"
                                                : "border-slate-800 bg-copper/20 hover:border-gold/40"
                                            }`}
                                    >
                                        {selectedFuncs.ia
                                            ? <FontAwesomeIcon icon={faCircleCheck} className="text-gold" />
                                            : <FontAwesomeIcon icon={faCircle} />
                                        }
                                        <span>{tCalculator("Step2.func5")}</span>
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <select 
                                    id="calcSupport" 
                                    value={selectedPlan}
                                    onChange={(e) => setSelectedPlan(e.target.value)}
                                    className="w-full bg-copper/30 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-3 pr-10 focus:border-gold outline-none cursor-pointer hover:border-gold/50 transition-all appearance-none"
                                >
                                    <option value="0" className="bg-[#060407] text-slate-200">{tCalculator("Step3.plan1")}</option>
                                    <option value="50" className="bg-[#060407] text-slate-200">{tCalculator("Step3.plan2")}</option>
                                    <option value="120" className="bg-[#060407] text-slate-200">{tCalculator("Step3.plan3")}</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold text-xs">
                                    ▼
                                </div>
                            </div>

                        </div>

                        <div className="bg-black/90 p-6 rounded-2xl border border-amber/30 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-heading" data-i18n="calc-res-title">{tCalculator("Price.title")}</h3>
                                <div className="text-3xl sm:text-4xl font-black text-gold mb-1 font-heading" id="calcTotalPrice">${minPrice} - ${maxPrice}</div>
                                <span className="text-[10px] text-slate-500 block mb-6" data-i18n="calc-res-sub">{tCalculator("Price.span")}</span>

                                <div className="space-y-2 text-xs border-t border-slate-800 pt-4 font-mono">
                                    <div className="flex justify-between text-slate-400">
                                        <span data-i18n="calc-base">{tCalculator("Price.type")}:</span>
                                        <span id="summaryBase" className="text-white">{getTypeName()}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span data-i18n="calc-extras">{tCalculator("Price.features")}:</span>
                                        <span id="summaryExtras" className="text-white">{activeFuncsCount} {tCalculator("Price.amount")}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span data-i18n="calc-plan">{tCalculator("Price.plan")}:</span>
                                        <span id="summarySupport" className="text-white">{getPlanName()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <button id="sendCalcToFormBtn" className="w-full cursor-pointer py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber via-gold to-crimson text-black text-xs font-bold font-heading hover:shadow-lg hover:shadow-gold/30 transition-all flex items-center justify-center gap-2">
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <span data-i18n="calc-btn-send">{tCalculator("calc-btn")}</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}