'use client'

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Language
import { useRouter, usePathname } from "@/src/i18n/navigation";

export default function Header(){
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = () => {
    const nextLocale = currentLocale === "es" ? "en" : "es";
    router.replace(pathname, { locale: nextLocale });
  };

  const tNav = useTranslations("Header");

  // Control Routing
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    const isHome = pathname === "/" || pathname === "" || pathname === `/${currentLocale}`;

    if (isHome) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return(
    <header className="fixed top-0 left-0 w-full z-50 border-b border-amber/15 backdrop-blur-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            <Link href="/#hero" onClick={(e) => handleAnchorClick(e, "hero")} className="flex items-center gap-3 group">
                <Image 
                    src="/logo-icon.webp"
                    alt="Nexo Pixel X Logo"
                    width={50}
                    height={44}
                    className="w-[50px] h-auto object-contain"
                    priority
                />
                <div className="flex flex-col">
                    <span className="font-extrabold text-lg text-white tracking-wider flex items-center gap-1 font-heading">
                        NexoPixel <span className="text-gold drop-shadow-[0_0_10px_rgba(255,170,68,0.8)]">X</span>
                    </span>
                    <span className="text-[9px] text-gold/70 tracking-widest uppercase -mt-1 font-semibold">{tNav("span")}</span>
                </div>
            </Link>

            <nav className="hidden [@media(min-width:940px)]:flex items-center gap-4 lg:gap-6 text-sm font-medium text-slate-300">
                <Link href="/#servicios" onClick={(e) => handleAnchorClick(e, "servicios")} className="hover:text-gold transition-colors">{tNav("navbar.services")}</Link>
                <Link href="/#ventajas" onClick={(e) => handleAnchorClick(e, "ventajas")} className="hover:text-gold transition-colors">{tNav("navbar.why-npx")}</Link>
                <Link href="/#cotizador" onClick={(e) => handleAnchorClick(e, "cotizador")} className="hover:text-gold transition-colors">{tNav("navbar.simulator")}</Link>
                <Link href="/#stack" onClick={(e) => handleAnchorClick(e, "stack")} className="hover:text-gold transition-colors">{tNav("navbar.tech")}</Link>
                <Link href="/#nosotros" onClick={(e) => handleAnchorClick(e, "nosotros")} className="hover:text-gold transition-colors">{tNav("navbar.about-us")}</Link>
                <Link href="/portafolio" className="hover:text-gold transition-colors">{tNav("navbar.works")}</Link>
            </nav>

            <div className="hidden [@media(min-width:940px)]:flex items-center gap-3">
                <button
                    aria-label={tNav("lang-label")} 
                    onClick={() => changeLanguage()} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-copper/40 border border-amber/30 text-xs font-semibold hover:border-gold transition-all text-gold cursor-pointer"
                >
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>{tNav("lang")}</span>
                </button>

                <Link 
                    href="/#cotizador" 
                    onClick={(e) => handleAnchorClick(e, "cotizador")}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-r from-amber via-gold to-crimson group-hover:from-gold group-hover:to-amber text-black shadow-lg shadow-amber/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-primary-background rounded-[10px] text-white group-hover:bg-transparent group-hover:text-black font-heading tracking-wide" data-i18n="nav-cta">
                        {tNav("quote-btn")}
                    </span>
                </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="[@media(min-width:940px)]:hidden text-slate-300 active:text-gold text-2xl focus:outline-none cursor-pointer"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>

        <div className={`[@media(min-width:940px)]:hidden bg-bg/95 border-b border-amber/20 px-6 py-6 flex flex-col gap-4 text-base font-medium ${
            isOpen
              ? "block"
              : "hidden"
          }`}>
            <Link href="/#servicios" onClick={(e) => handleAnchorClick(e, "servicios")} className="mobile-link hover:text-gold active:text-gold">{tNav("navbar.services")}</Link>
            <Link href="/#ventajas" onClick={(e) => handleAnchorClick(e, "ventajas")} className="mobile-link hover:text-gold active:text-gold">{tNav("navbar.why-npx")}</Link>
            <Link href="/#cotizador" onClick={(e) => handleAnchorClick(e, "cotizador")} className="mobile-link hover:text-gold active:text-gold">{tNav("navbar.simulator")}</Link>
            <Link href="/#stack" onClick={(e) => handleAnchorClick(e, "stack")} className="mobile-link hover:text-gold active:text-gold">{tNav("navbar.tech")}</Link>
            <Link href="/#nosotros" onClick={(e) => handleAnchorClick(e, "nosotros")} className="mobile-link hover:text-gold active:text-gold">{tNav("navbar.about-us")}</Link>
            <Link href="/portafolio" onClick={() => setIsOpen(false)} className="mobile-link hover:text-gold active:text-gold">{tNav("navbar.works")}</Link>
            <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                <button 
                    id="langToggleMobile" 
                    aria-label={tNav("lang-label")} 
                    onClick={() => changeLanguage()} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-copper/50 border border-amber/30 text-xs font-semibold text-gold cursor-pointer"
                >
                    <FontAwesomeIcon icon={faGlobe} />
                    <span id="langTextMobile">{tNav("lang")}</span>
                </button>
                <Link 
                    href="/#cotizador" 
                    onClick={(e) => handleAnchorClick(e, "cotizador")}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-r from-amber via-gold to-crimson group-hover:from-gold group-hover:to-amber text-black shadow-lg shadow-amber/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-primary-background rounded-[10px] text-white group-hover:bg-transparent group-hover:text-black group-active:bg-transparent group-active:text-black font-heading tracking-wide" data-i18n="nav-cta">
                        {tNav("quote-btn")}
                    </span>
                </Link>
            </div>
        </div>
    </header>
  );
}