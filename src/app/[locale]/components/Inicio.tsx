import { useTranslations } from 'next-intl';
import { WppIcon } from './Icons';
import Image from 'next/image';

export default function Inicio() {
  const tHero = useTranslations('Home');

  return (
    <div className="text-[#D5E3FF] relative min-h-screen text-white font-body overflow-hidden flex flex-col pb-64 pt-32 gap-10">

      <div className="absolute inset-0 z-0 select-none">
        <Image 
          src="/fondo-inicio.jpg" 
          alt="Fondo de teclado y código" 
          fill={true}
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050A15dd] from-10% to-[#050A15] to-90%" />
      </div>

      <main className="relative z-10 px-20 flex flex-col lg:flex-row items-center justify-between px-16 py-12 w-full max-w-[1400px] mx-auto">
        
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
          <h1 className="text-6xl lg:text-7xl lg:text-[85px] font-black tracking-tight flex flex-col leading-[1.05] font-heading select-none">
            <span className="text-[#8914B7] drop-shadow-md text-shadow-[0_0_8px_rgba(137,20,183,0.8)]">
              {tHero('title-1')}
            </span>
            <span className="text-transparent drop-shadow-md text-shadow-[0_0_50px_rgba(0,85,255,0.5)]" style={{ WebkitTextStroke: '2px #0055FF' }}>
              {tHero('title-2')}
            </span>
          </h1>
          
          <p className="text-base lg:text-lg text-[#d5d5d5aa] max-w-md font-light leading-relaxed font-heading">
            {tHero('description')}
          </p>
        
            <button className="group relative flex items-center justify-center gap-3 w-47 my-12 px-6 py-2.5 pr-12 hover:pr-6 border-2 border-[#0055FF] rounded-md cursor-pointer hover:bg-[#0055FF] transition-all duration-500 font-medium shadow-[0_0_5px_rgba(0,85,255)] font-heading">
              <span className="transition-all duration-500 ease-in-out">
                {tHero('contact-button')}
              </span>
              <span className='absolute right-4 transition-all duration-500 ease-in-out group-hover:opacity-0  group-hover:scale-0  group-hover:w-0  group-hover:overflow-hidden'>
                <WppIcon className='text-[#0055FF] drop-shadow-[0_0_8px_rgba(0,85,255,0.8)]'></WppIcon>
              </span>
            </button>
        </div>

        <div className="w-full relative h-[450px] lg:h-[600px] flex items-center justify-center lg:justify-end">
          <Image 
            src="/logo-nexopixel-color-sin-fondo.png"
            alt="Mockups de la plataforma en múltiples dispositivos" 
            fill
            sizes="(max-width: 500px) 100vw, 50vw"
            className="object-contain object-center lg:object-right"
            priority
          />
        </div>
      </main>

    </div>
  );
}