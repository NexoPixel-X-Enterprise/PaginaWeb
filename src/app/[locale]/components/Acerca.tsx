import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Acerca() {
  const t = useTranslations("Acerca");
  const tMain = useTranslations("Main");

  return (
    <div style={{ backgroundColor: '#050B14', color: '#FFFFFF', padding: '20px 0', fontFamily: 'sans-serif' }}>
      
      <section style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: 'bold' }}>{t('titulo')}</h2>
        <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '1.1rem' }}>
          {t('parrafo1')} <span style={{ color: '#3B82F6' }}>{t('resaltado1')}</span>.<br />
          {t('parrafo2')} <span style={{ color: '#8B5CF6' }}>{t('resaltado2')}</span>.
        </p>
      </section>

      <hr style={{ borderColor: '#4C1D95', margin: '0', borderWidth: '1px' }} />

      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '60px', fontWeight: 'bold' }}>{t('tituloGarantia')}</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/icon-pen.svg" alt="Apretón de manos" width={120} height={120} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/icon-speedometer.svg" alt="Velocímetro" width={120} height={120} />
          </div>

          <div style={{ transform: 'rotate(15deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/icon-pen.svg" alt="Regla y Lápiz" width={120} height={120} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Image src="/icon-pc.svg" alt="Monitor" width={120} height={120} />
          </div>

        </div>
      </section>

      <hr style={{ borderColor: '#4C1D95', margin: '0', borderWidth: '1px' }} />

      <footer style={{ padding: '60px 20px', textAlign: 'center', color: '#9CA3AF' }}>
        <p>{tMain('derechosReservados')}</p>
      </footer>

    </div>
  );
}