import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Inicio() {
  const tNav = useTranslations('Navbar');
  const tHero = useTranslations('Hero');

  return (
    <div className="relative min-h-screen bg-[#05070c] text-white font-sans overflow-hidden flex flex-col">

      <div className="absolute inset-0 z-0">
        <Image 
          src="/fondofinal.jpg" 
          alt="Fondo de teclado y código" 
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      <header className="relative z-20 pt-6 pb-4 px-8 md:px-16 w-full max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-6 text-sm text-gray-300 font-light">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>0414-1234567</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>correo@gmail.com</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-normal text-gray-300">
            <a href="#" className="hover:text-white transition-colors">{tNav('about')}</a>
            <a href="#" className="hover:text-white transition-colors">{tNav('work')}</a>
            <a href="#" className="hover:text-white transition-colors">{tNav('services')}</a>
            <a href="#" className="hover:text-white transition-colors">{tNav('contact')}</a>
          </nav>

          <div className="relative flex items-center justify-center">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" className="stroke-[#a855f7]" strokeWidth="3"/>
              <path d="M17 5L5 17M7 19l12-12" className="stroke-[#3b82f6]" strokeWidth="1"/>
            </svg>
          </div>
          
        </div>
      </header>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent opacity-70"></div>
      </div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-12 lg:py-0 w-full max-w-[1400px] mx-auto flex-grow gap-10">
        
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-[85px] font-black tracking-tight flex flex-col leading-[1.05]">
            <span className="text-[#a855f7] drop-shadow-md">
              {tHero('title1')}
            </span>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #1d4ed8' }}>
              {tHero('title2')}
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 max-w-md font-light leading-relaxed">
            {tHero('description')}
          </p>
          
          <div className="pt-4">
            <button className="flex items-center gap-3 px-6 py-2.5 border-2 border-[#1d4ed8] rounded-md bg-[#1e3a8a]/40 hover:bg-[#1d4ed8]/60 transition-all font-medium shadow-[0_0_15px_rgba(29,78,216,0.3)]">
              {tHero('contactBtn')}
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl relative h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-end">
          <Image 
            src="/mockups-final.png" 
            alt="Mockups de la plataforma en múltiples dispositivos" 
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </main>

    </div>
  );
}