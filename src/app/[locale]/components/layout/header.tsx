import { useTranslations } from "next-intl";
import { WppIcon, BashIcon} from "../ui/Icons";
import LanguageToggle from "../ui/languageToggle";
import Image from "next/image";

export default function Header(){

  const tNav = useTranslations("Navbar");

  return(
    <header className="fixed z-20 top-0 top-0 left-1/2 -translate-x-1/2 pt-5 px-4 w-full max-w-[1400px] mx-auto backdrop-blur-sm">
      <div className="flex items-center justify-between">
                  
        <div className="flex items-center gap-6 text-sm text-gray-300 font-light">
          <div className="flex items-center gap-2">
            <WppIcon className='w-8 text-[#D5D5D5] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'></WppIcon>
            <span>0414-1234567</span>
          </div>
          <div className="flex items-center gap-2">
            <BashIcon className='w-8 text-[#D5D5D5] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'></BashIcon>
            <span>correo@gmail.com</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-normal text-gray-300">
          <a href="#" className="hover:text-white transition-colors">{tNav('about')}</a>
          <a href="#" className="hover:text-white transition-colors">{tNav('work')}</a>
          <a href="#" className="hover:text-white transition-colors">{tNav('services')}</a>
          <a href="#" className="hover:text-white transition-colors">{tNav('contact')}</a>
        </nav>
        
        <div className="relative flex items-center justify-center gap-4">
          <LanguageToggle></LanguageToggle>
          <Image 
            src={"/logo-icon.png"}
            alt='logo nexo pixel'
            width={50}
            height={50}
            className="w-auto h-auto"
          />
        </div>
                  
      </div>
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-16 mt-5">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ac19e5] to-transparent opacity-70"></div>
      </div>
    </header>
  );
}