'use client'

import { useTranslations } from "next-intl";
import { WppIcon, BashIcon, BarsIcon, XMarkIcon} from "../ui/Icons";
import { useState } from "react";
import LanguageToggle from "../ui/languageToggle";
import Image from "next/image";
import Link from "next/link";

export default function Header(){

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const tNav = useTranslations("Navbar");

  return(
    <header className="fixed z-20 top-0 top-0 left-1/2 -translate-x-1/2 pt-5 px-4 w-full max-w-[1400px] mx-auto backdrop-blur-sm">
      <div className="flex items-center justify-between">
                  
        <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-6 items-start sm:items-center text-sm text-[#d5d5d5aa] font-light">
          <div className="flex items-center gap-2">
            <WppIcon className='w-8 text-[#D5D5D5] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' />
            <a 
              href="https://wa.me/584167428059" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d5d5d5] hover:text-[#0055FF] transition-colors ml-1">
              0416-7428059
            </a>
          </div>
          <div className="flex items-center gap-2">
            <BashIcon className='w-8 text-[#D5D5D5] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' />
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nexopixelx@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d5d5d5] hover:text-[#0055FF] transition-colors ml-1"
            >
              nexopixelx@gmail.com
            </a>
          </div>
        </div>
        
        <nav className="hidden [@media(min-width:840px)]:flex gap-8 text-sm font-normal text-gray-300">
          <Link href="#inicio" className="hover:text-white transition-colors">{tNav('home')}</Link>
          <Link href="#acerca" className="hover:text-white transition-colors">{tNav('about')}</Link>
          <Link href="#trabajos" className="hover:text-white transition-colors">{tNav('work')}</Link>
          <Link href="#servicios" className="hover:text-white transition-colors">{tNav('services')}</Link>
          <Link href="#contacto" className="hover:text-white transition-colors">{tNav('contact')}</Link>
        </nav>
        
        <div className="hidden [@media(min-width:840px)]:flex relative items-center justify-center gap-4">
          <LanguageToggle></LanguageToggle>
          <Image 
            src={"/logo-icon.png"}
            alt='logo nexo pixel'
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </div>

        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="[@media(min-width:840px)]:hidden p-2 cursor-pointer text-[#d5d5d5aa] drop-shadow-[0_0_2px_rgb(213,213,213)] hover:text-[#ac19e5] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)]"
        >
          <BarsIcon className="size-8"></BarsIcon>
        </button>
                  
      </div>
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-16 mt-5">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ac19e5] to-transparent opacity-70"></div>
      </div>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 transition-opacity duration-300 [@media(min-width:840px)]:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel lateral */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-[#050A15] border-l border-[#AC19E5] p-6 flex flex-col justify-between drop-shadow-[0_0_5px_rgba(172,25,229,0.8)] transition-transform duration-300 ease-in-out z-50 [@media(min-width:840px)]:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+12px)]'
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Header panel lateral */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#d5d5d5aa]">Idioma / Language:</span>
              <LanguageToggle />
            </div>
            <button
              onClick={closeMenu}
              className="text-[#d5d5d5] p-1 cursor-pointer hover:text-[#AC19E5] drop-shadow-[0_0_2px_rgba(213,213,213,0.8)] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)]"
              aria-label="Cerrar menú"
            >
              <XMarkIcon className="size-5"></XMarkIcon>
            </button>
          </div>

          {/* Enlaces */}
          <nav className="flex flex-col gap-6 text-lg font-medium text-[#d5d5d5]">
            <Link href="#inicio" onClick={closeMenu} className="hover:text-[#ac19e5] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)] transition-colors">
              {tNav('home')}
            </Link>
            <Link href="#acerca" onClick={closeMenu} className="hover:text-[#ac19e5] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)] transition-colors">
              {tNav('about')}
            </Link>
            <Link href="#trabajos" onClick={closeMenu} className="hover:text-[#ac19e5] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)] transition-colors">
              {tNav('work')}
            </Link>
            <Link href="#servicios" onClick={closeMenu} className="hover:text-[#ac19e5] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)] transition-colors">
              {tNav('services')}
            </Link>
            <Link href="#contacto" onClick={closeMenu} className="hover:text-[#ac19e5] hover:drop-shadow-[0_0_5px_rgba(172,25,229,0.8)] transition-colors">
              {tNav('contact')}
            </Link>
          </nav>
        </div>

        {/* Selector de Idioma al Pie de la Sidebar */}
        <div className="pt-6 border-t border-gray-800 flex items-center justify-center">
          <Image
              src="/logo-icon.png"
              alt="logo nexo pixel"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
        </div>
      </aside>
    </header>
  );
}