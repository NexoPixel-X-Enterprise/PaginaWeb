import { useTranslations } from "next-intl"
import { faMagicWandSparkles, faHandshake, faHeadset, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Advantages(){

    const tAdvantages = useTranslations("Advantages");

    return(
        <section id="ventajas" className="py-20 relative border-t border-amber/15 bg-primary-background/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gold font-heading">{tAdvantages("span")}</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{tAdvantages("title")}</p>
                    <p className="text-slate-400 text-sm sm:text-base">{tAdvantages("subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    <div className="bg-glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-amber/10 border border-amber/30 flex items-center justify-center text-gold text-xl mb-4">
                            <FontAwesomeIcon icon={faMagicWandSparkles} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 font-heading">{tAdvantages("card1-title")}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {tAdvantages("card1-desc")}
                        </p>
                    </div>

                    <div className="bg-glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xl mb-4">
                            <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 font-heading">{tAdvantages("card2-title")}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {tAdvantages("card2-desc")}
                        </p>
                    </div>

                    <div className="bg-glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson text-xl mb-4">
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 font-heading">{tAdvantages("card3-title")}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {tAdvantages("card3-desc")}
                        </p>
                    </div>

                    <div className="bg-glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl mb-4">
                            <FontAwesomeIcon icon={faRocket} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 font-heading">{tAdvantages("card4-title")}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {tAdvantages("card4-desc")}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}