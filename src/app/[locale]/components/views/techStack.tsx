import { faReact, faTypescript, faNode, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslations } from "next-intl"

export default function TechStack(){

    const tTechStack = useTranslations("TechStack");

    return(
        <section id="stack" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gold font-heading" data-i18n="tech-subtitle">{tTechStack("span")}</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading" data-i18n="tech-title">{tTechStack("title")}</p>
                    <p className="text-slate-400 text-sm sm:text-base" data-i18n="tech-desc">{tTechStack("subtitle")}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
                    <div className="p-4 rounded-2xl bg-copper/20 border border-slate-800 hover:border-gold/60 transition-all group">
                        <FontAwesomeIcon icon={faReact} className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white">Next.js & React</div>
                        <div className="text-[10px] text-slate-500">Frontend SSR</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-copper/20 border border-slate-800 hover:border-gold/60 transition-all group">
                        <FontAwesomeIcon icon={faServer} className="text-3xl text-red-500 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white">NestJS</div>
                        <div className="text-[10px] text-slate-500">Backend Node.js</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-copper/20 border border-slate-800 hover:border-gold/60 transition-all group">
                        <FontAwesomeIcon icon={faTypescript} className="text-3xl text-blue-500 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white">TypeScript</div>
                        <div className="text-[10px] text-slate-500">{tTechStack("ts-desc")}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-copper/20 border border-slate-800 hover:border-gold/60 transition-all group">
                        <FontAwesomeIcon icon={faNode} className="text-3xl text-green-800 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white">Node.js</div>
                        <div className="text-[10px] text-slate-500">{tTechStack("node-desc")}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-copper/20 border border-slate-800 hover:border-gold/60 transition-all group">
                        <FontAwesomeIcon icon={faDatabase} className="text-3xl text-gold group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white">MySQL</div>
                        <div className="text-[10px] text-slate-500">{tTechStack("mysql-desc")}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-copper/20 border border-slate-800 hover:border-gold/60 transition-all group">
                        <FontAwesomeIcon icon={faDocker} className="text-3xl text-blue-400 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white">Docker</div>
                        <div className="text-[10px] text-slate-500">{tTechStack("docker-desc")}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}