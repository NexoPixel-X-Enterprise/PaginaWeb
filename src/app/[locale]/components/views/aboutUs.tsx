import { faGraduationCap, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslations } from "next-intl"

export default function AboutUs(){

    const tAbout = useTranslations("AboutUs");

    return(
        <section id="nosotros" className="py-20 relative bg-primary-background/80 border-t border-amber/15">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-gold font-heading">{tAbout("span")}</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
                            {tAbout("title")}
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {tAbout("description")}
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {tAbout("description2")}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faGraduationCap} className="text-gold text-xl" />
                                <span className="text-xs text-slate-300 font-medium">{tAbout("span2")}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FontAwesomeIcon icon={faLanguage} className="text-amber text-xl" />
                                <span className="text-xs text-slate-300 font-medium">{tAbout("span3")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-glass-card p-8 rounded-3xl border border-amber/20 relative z-10 space-y-6">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                                <div>
                                    <h3 className="text-lg font-bold text-white font-heading">{tAbout("Team.title")}</h3>
                                    <p className="text-xs text-slate-400">{tAbout("Team.span")}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">{tAbout("Team.span2")}</span>
                            </div>

                            <div className="space-y-4 text-xs">
                                <div className="p-3 rounded-xl bg-black/60 border border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-amber/20 flex items-center justify-center text-gold font-bold font-heading">EC</div>
                                        <div>
                                            <div className="font-bold text-white">E-commerce</div>
                                            <div className="text-slate-400 text-[10px]">Next.js, NestJS, Tailwind CSS, Supabase</div>
                                        </div>
                                    </div>
                                    <i className="fa-solid fa-code text-slate-500"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}