import { useTranslations } from "next-intl";
import { faCalculator, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero(){

    const tHero = useTranslations("Hero");

    return(
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div 
                className="absolute top-0 left-0 w-full min-h-screen pointer-events-none"
                style={{
                    clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0% 100%)",
                    background: "linear-gradient(to bottom, rgba(255, 170, 68, 0.05) 0%, rgba(6, 4, 7, 0) 100%)"
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto space-y-6">
  
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/10 border border-gold/40 text-gold text-xs font-semibold tracking-wide animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
                        <span data-i18n="hero-badge">{tHero("span")}</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight font-heading">
                        <span data-i18n="hero-title-1">{tHero("title1")}</span>
                        <span className="bg-[linear-gradient(135deg,#ffffff_0%,#ffaa44_40%,#ff5500_80%,#ff2200_100%)] bg-clip-text text-transparent drop-shadow-md" data-i18n="hero-title-2">{tHero("title2")}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal" data-i18n="hero-subtitle">
                        {tHero("subtitle")}<strong>{tHero("tech-frontend")}</strong>{tHero("and")}<strong>{tHero("tech-backend")}</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a href="#cotizador" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber via-gold to-crimson font-bold text-black shadow-lg shadow-amber/30 hover:shadow-gold/50 hover:scale-105 transition-all text-center flex items-center justify-center gap-2 font-heading">
                            <FontAwesomeIcon icon={faCalculator} />
                            <span data-i18n="hero-btn-primary">{tHero("quote-btn")}</span>
                        </a>
                        <a href="#servicios" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-copper/40 border border-amber/40 hover:border-gold text-slate-200 font-semibold hover:bg-copper/70 transition-all text-center flex items-center justify-center gap-2 font-heading">
                            <FontAwesomeIcon icon={faCompass} className="text-gold" />
                            <span data-i18n="hero-btn-secondary">{tHero("services-btn")}</span>
                        </a>
                    </div>

                    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-amber/15 max-w-3xl mx-auto">
                        <div>
                            <div className="text-2xl font-black text-white font-heading">100%</div>
                            <div className="text-xs text-slate-400 font-medium" data-i18n="stat-1">{tHero("warranty1")}</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-gold font-heading">Next + Nest</div>
                            <div className="text-xs text-slate-400 font-medium" data-i18n="stat-2">{tHero("warranty2")}</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-white font-heading">24/7</div>
                            <div className="text-xs text-slate-400 font-medium" data-i18n="stat-3">{tHero("warranty3")}</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-gold font-heading">Global</div>
                            <div className="text-xs text-slate-400 font-medium" data-i18n="stat-4">{tHero("warranty4")}</div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-glass-card p-2 sm:p-4 border-1 border-gold/25 hover:border-gold/60 relative group shadow-[0_0_20px_-5px_rgba(255,119,0,0.25),_inset_0_0_15px_-8px_rgba(255,170,68,0.2)] hover:shadow-[0_0_30px_2px_rgba(255,119,0,0.45),_inset_0_0_20px_-3px_rgba(255,170,68,0.35)] transition-all duration-100">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 mb-3">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-crimson/80 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-gold/80 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                        </div>
                        <div className="text-xs font-mono text-gold flex items-center gap-2">
                            <i className="fa-solid fa-meteor"></i> quasar-core-system.ts
                        </div>
                        <div className="text-xs text-slate-500 font-mono">TypeScript / Node.js</div>
                    </div>
                    <div className="p-4 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto space-y-2 bg-black/80 rounded-xl">
                        <p className="text-slate-500"><span className="text-amber-400">import</span> {"{"} QuasarEngine {"}"} <span className="text-amber-400">from</span> <span className="text-emerald-400">&apos;@nexopixel/core&apos;</span>;</p>
                        <p>&nbsp;</p>
                        <p><span className="text-blue-400">const</span> <span className="text-amber-300">pymeTransformation</span> = <span className="text-blue-400">new</span> <span className="text-amber-400">QuasarEngine</span>({"{"}</p>
                        <p className="pl-4"><span className="text-slate-400">frontend:</span> <span className="text-emerald-400">&apos;Next.js 14 SSR & React&apos;</span>,</p>
                        <p className="pl-4"><span className="text-slate-400">backend:</span> <span className="text-emerald-400">&apos;NestJS Microservices&apos;</span>,</p>
                        <p className="pl-4"><span className="text-slate-400">gravityPull:</span> <span className="text-emerald-400">&apos;Maximal Client Retention&apos;</span>,</p>
                        <p className="pl-4"><span className="text-slate-400">postLaunchSupport:</span> <span className="text-amber-400">true</span> <span className="text-slate-500">&#47;&#47; {tHero("comment")}</span></p>
                        <p>{"}"});</p>
                        <p>&nbsp;</p>
                        <div className="flex flex-row">
                            <p className="text-slate-400 block"><span className="text-amber-400">await</span> pymeTransformation.<span className="text-amber-300">launchGlobally</span>();</p>
                            <div className="border-l-3 border-slate-300 animate-blink"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}