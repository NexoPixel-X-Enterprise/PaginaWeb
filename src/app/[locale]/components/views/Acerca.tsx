import { useTranslations } from 'next-intl';
import { SpeedometerIcon, PcIcon, PenIcon, HandshakeIcon } from '../ui/Icons';

export default function Acerca() {
  const t = useTranslations("About");

  return (
    <section className='bg-[radial-gradient(circle_at_center,_#001133_0%,_#050A15_40%)] min-h-screen py-20 px-4 flex-col gap-8 justify-center font-body'>
      
      <div className='py-12 flex flex-col justify-center items-center m-auto max-w-7xl'>
        <h2 className='text-4xl font-semibold text-center text-[#D5D5D5] pb-12 font-heading'>
          {t('about-title')}
        </h2>
        <p className='text-md text-[#D5D5D5dd] mb-16 text-center font-body'>
          {t('about-description')}
        </p>
      </div>

      <div className="absolute left-0 w-full h-[1px] bg-[#AC19E5] shadow-[0_0_50px_rgb(172,25,229)]"></div>

      <div className='text-center pt-8'>
        <h2 className='text-4xl font-semibold text-center text-[#D5D5D5] pb-4 font-heading'>
          {t('warranties-title')}
        </h2>
        
        <div className='w-full pt-24 pb-54 text-[#0055E1] font-body'>

        <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-10 sm:gap-20 lg:gap-20 px-4 sm:px-10'>
            
            {/* Característica 1: Ícono Izquierda, Texto Derecha (Siempre) */}
            <div className='flex flex-row items-center gap-6 max-w-sm lg:flex-col lg:text-center lg:gap-0'>
                <div className="shrink-0">
                  <HandshakeIcon className="size-20 lg:size-35" />
                </div>
                <p className='py-7 max-w-xl text-[#d5d5d5aa]'>
                  {t("reliability-description")}
                </p>
            </div>

            {/* Característica 2: Texto Izquierda, Ícono Derecha (Móvil) */}
            {/* Se usa 'flex-row-reverse' para móvil, y se vuelve a 'lg:flex-col' para PC */}
            <div className='flex flex-row-reverse items-center gap-6 max-w-sm lg:flex-col lg:text-center lg:gap-0'>
              <div className="shrink-0">
                <SpeedometerIcon className="size-20 lg:size-35" />
              </div>
              <p className='py-7 max-w-xl text-[#d5d5d5aa]'>
                {t("time-description")}
              </p>
            </div>

            {/* Característica 3: Ícono Izquierda, Texto Derecha (Siempre) */}
            <div className='flex flex-row items-center gap-6 max-w-sm lg:flex-col lg:text-center lg:gap-0'>
              <div className="shrink-0">
                <PenIcon className="size-20 lg:size-35" />
              </div>
              <p className='py-7 max-w-xl text-[#d5d5d5aa]'>
                {t("pen-description")}
              </p>
            </div>

            {/* Característica 4: Texto Izquierda, Ícono Derecha (Móvil) */}
            {/* Se usa 'flex-row-reverse' para móvil, y se vuelve a 'lg:flex-col' para PC */}
            <div className='flex flex-row-reverse items-center gap-6 max-w-sm lg:flex-col lg:text-center lg:gap-0'>
              <div className="shrink-0">
                <PcIcon className="size-20 lg:size-35" />
              </div>
              <p className='py-7 max-w-xl text-[#d5d5d5aa]'>
                {t("performance-description")}
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute left-0 w-full h-[1px] bg-[#AC19E5] drop-shadow-[0_0_50px_rgb(172,25,229)]"></div>

    </section>
  );
}