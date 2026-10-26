import { faCheck, faGlobe, faLayerGroup, faCartShopping, faDesktop, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslations } from "next-intl"

export default function Services(){

    const tServices = useTranslations("Services")

    return(
        <section id="servicios" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gold font-heading">{tServices("span")}</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{tServices("title")}</p>
                    <p className="text-slate-400 text-sm sm:text-base">{tServices("subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-glass-card p-8 rounded-2xl border border-amber/15 hover:border-gold/60 transition-all duration-300 relative group overflow-hidden">
                        <div className="text-3xl text-gold mb-5"><FontAwesomeIcon icon={faGlobe} /></div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading" >{tServices("card1.title")}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {tServices("card1.description")}
                        </p>
                        <ul className="text-xs text-slate-300 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-gold" icon={faCheck} /> {tServices("card1.check1")}</li>
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-gold" icon={faCheck} /> {tServices("card1.check2")}</li>
                        </ul>
                    </div>

                    <div className="bg-glass-card p-8 rounded-2xl border border-amber/15 hover:border-gold/60 transition-all duration-300 relative group overflow-hidden">
                        <div className="text-3xl text-amber mb-5"><FontAwesomeIcon icon={faLayerGroup} /></div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading">{tServices("card2.title")}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {tServices("card2.description")}
                        </p>
                        <ul className="text-xs text-slate-300 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-amber" icon={faCheck} /> {tServices("card2.check1")}</li>
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-amber" icon={faCheck} /> {tServices("card2.check2")}</li>
                        </ul>
                    </div>

                    <div className="bg-glass-card p-8 rounded-2xl border border-amber/15 hover:border-gold/60 transition-all duration-300 relative group overflow-hidden">
                        <div className="text-3xl text-crimson mb-5"><FontAwesomeIcon icon={faCartShopping} /></div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading">{tServices("card3.title")}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {tServices("card3.description")}
                        </p>
                        <ul className="text-xs text-slate-300 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-crimson" icon={faCheck} /> {tServices("card3.check1")}</li>
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-crimson" icon={faCheck} /> {tServices("card3.check2")}</li>
                        </ul>
                    </div>

                    <div className="bg-glass-card p-8 rounded-2xl border border-amber/15 hover:border-gold/60 transition-all duration-300 relative group overflow-hidden">
                        <div className="text-3xl text-amber-400 mb-5"><FontAwesomeIcon icon={faDesktop} /></div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading">{tServices("card4.title")}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {tServices("card4.description")}
                        </p>
                        <ul className="text-xs text-slate-300 space-y-2 font-mono">
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-amber-400" icon={faCheck} /> {tServices("card4.check1")}</li>
                            <li className="flex items-center gap-2"><FontAwesomeIcon className="text-amber-400" icon={faCheck} /> {tServices("card4.check2")}</li>
                        </ul>
                    </div>

                    <div className="bg-glass-card p-8 rounded-2xl border border-amber/15 hover:border-gold/60 transition-all duration-300 relative group overflow-hidden lg:col-span-2">
                        <div className="text-3xl text-gold mb-5"><FontAwesomeIcon icon={faShieldHalved} /></div>
                        <h3 className="text-xl font-bold text-white mb-3 font-heading">{tServices("card5.title")}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {tServices("card5.description")}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono">
                            <div className="flex items-center gap-2"><FontAwesomeIcon className="text-gold" icon={faCheck} /> {tServices("card5.check1")}</div>
                            <div className="flex items-center gap-2"><FontAwesomeIcon className="text-gold" icon={faCheck} /> {tServices("card5.check2")}</div>
                            <div className="flex items-center gap-2"><FontAwesomeIcon className="text-gold" icon={faCheck} /> {tServices("card5.check3")}</div>
                            <div className="flex items-center gap-2"><FontAwesomeIcon className="text-gold" icon={faCheck} /> {tServices("card5.check4")}</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}