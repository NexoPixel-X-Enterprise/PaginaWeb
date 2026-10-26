import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useTranslations } from "next-intl"

export default function Footer(){

    const tFooter = useTranslations("Footer")

    return (
      <footer className="border-t border-amber/15 bg-primary-background py-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  
                  <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-[9px] font-black text-white font-heading">NPX</div>
                      <span className="text-sm font-bold text-white font-heading">NexoPixel X</span>
                      <span className="text-xs text-slate-500">| {tFooter("span")}</span>
                  </div>

                  <div className="text-xs text-slate-500">
                      <span id="year"></span> {tFooter("span2")}
                  </div>

                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <a
                        href="https://github.com/nexopixelx-rgb"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="github"
                        className="hover:text-gold transition-colors">
                          <FontAwesomeIcon icon={faGithub}/>
                      </a>
                      <a 
                      href="https://www.instagram.com/nexopixel_25/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="instagram" 
                      className="hover:text-gold transition-colors">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a 
                      href="mailto:nexopixelx@gmail.com"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="gmail"
                      className="hover:text-gold transition-colors">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                  </div>

              </div>
          </div>
      </footer>
    )
}