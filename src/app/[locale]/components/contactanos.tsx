'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import { sendEmail } from "@/src/lib/resend/resend"; 

export default function Contactanos() {
  const t = useTranslations("Main");
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
       
        alert(t('alertaExito', { nombre: formData.nombre }));
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        
        alert(t('alertaError', { error: result.error || "..." }));
      } 

    } catch (error) {
      console.error("Error al conectar con la Server Action:", error);
      alert(t('alertaErrorInesperado'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="bg-[#070913] bg-[radial-gradient(circle_at_center,_#002266_0%,_#070913_50%)] min-h-screen text-white pt-16 flex flex-col justify-between">
      
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 flex-grow mb-16">
        <div className="text-center mb-16">
          {/* Título Principal de Contacto */}
          <h1 className="text-4xl font-semibold tracking-tight text-[#d5d5d5]">{t('titulocontactar')}</h1>
        </div>
        {/*Bloque para enviar mensaje*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 bg-gradient-to-b from-[#161238] to-[#100c2a] p-8 rounded-2xl border border-blue-900/40 shadow-xl">
        
            <h2 className="text-2xl font-semibold mb-6">{t('enviamensajecontacto')}</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-[#d5d5d5] mb-1">{t('pontuNombre')}</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
                  placeholder={t('ponerNombre')} 
                />
              </div>

              <div>
                <label className="block text-sm text-[#d5d5d5] mb-1">{t('pontuEmail')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
                  placeholder={t('ponerEmail')} 
                />
              </div>

              <div>
                <label className="block text-sm text-[#d5d5d5] mb-1">{t('pontuAsunto')}</label>
                <input 
                  type="text" 
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
                  placeholder={t('ponerAsunto')} 
                />
              </div>

              <div>
                <label className="block text-sm text-[#d5d5d5] mb-1">{t('pontuMensaje')}</label>
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 min-h-[120px]" 
                  placeholder={t('ponerMensaje')}
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button 
                type="submit" 
                disabled={saving} 
                className="group w-full mt-6 bg-[#16123f] border-2 border-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-full py-3 font-medium transition flex items-center justify-center gap-2"
              >
                {saving ? t('botonEnviando') : t('botonEnviar')}
                <span 
                  className="w-5 h-5 bg-[#2b71ff] group-hover:bg-[#d5d5d5] transition-colors inline-block shrink-0" 
                  style={{
                    maskImage: 'url(/icon-mail.svg)', 
                    WebkitMaskImage: 'url(/icon-mail.svg)', 
                    maskSize: 'contain', 
                    WebkitMaskSize: 'contain', 
                    maskRepeat: 'no-repeat', 
                    WebkitMaskRepeat: 'no-repeat'
                  }}
                />
              </button>
            </form>
          </div>

          {/* Bloques de la derecha: Información y Whatsapp*/}
          <div className="space-y-6">
            <div className="bg-[#120e2e] p-8 rounded-2xl border border-purple-900/20 shadow-xl">
              <h3 className="text-lg font-semibold mb-4">{t('infoTitulo')}</h3>
              <div className="flex items-center gap-3 text-[#d5d5d5] mb-4">
                <span className="w-5 h-5 bg-[#ac19e5] transition-colors inline-block shrink-0 [mask-image:url('/icon-mail.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-mail.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                <p className="text-sm">
                  Email: <a href="mailto:nexopixelx@gmail.com?subject=Consulta%20NexoPixel%20X" className="text-white hover:text-purple-400 transition-colors ml-1">nexopixelx@gmail.com</a>
                </p>
              </div>
               
              <div className="flex items-center gap-3 text-[#d5d5d5]">
                <span className="w-5 h-5 bg-[#2b71ff] transition-colors inline-block shrink-0 [mask-image:url('/icon-phone.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-phone.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                <p className="text-sm">
                  {t('etiquetatlf')}: <a href="tel:+584167428059" className="text-white hover:text-purple-400 transition-colors ml-1">04167428059</a>
                </p>
              </div>
            </div>

            <hr className="border-1 border-[#8914b7] my-4" />
            {/*Bloque de Whatsapp, Verificar el teléfono del whatsapp */}
            <div className="bg-[#120e2e] p-8 rounded-2xl border border-purple-900/20 shadow-xl">
              <h4 className="text-lg font-semibold mb-4">{t('contactoDirecto')}</h4>
              <p className="text-[#d5d5d5] mb-2">{t('hablanosWhatsapp')}</p>
              
              <a 
                href="https://wa.me/584167428059?text=Hola%20NexoPixel%20X,%20me%20gustaría%20obtener%20más%20información." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full mt-6 bg-[#16123f] border-2 border-purple-500 hover:bg-[#6e1092] text-white rounded-full py-3 font-medium transition flex items-center justify-center gap-2"
              >
                {t('botonWhatsapp')}
                <span className="w-6 h-6 bg-[#8914B7] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-wpp.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-wpp.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer, cambiar la frase lorem ipsum. Falta añadir el redireccionamiento al github y al facebook*/}
      <footer className="border-t border-blue-500/50 pt-12 w-full bg-[#070913] bg-[radial-gradient(circle_at_bottom,_#4a0666_0%,_#070913_45%)] relative overflow-hidden shrink-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400 pb-8">
            <div className="space-y-3">
              <div className="text-white font-bold text-lg tracking-wider text-[#d5d5d5]">NexoPixel X</div>
              <p className="leading-relaxed max-w-xs text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#d5d5d5] font-semibold text-base">{t('infoTitulo')}</h5>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 bg-[#ac19e5] inline-block shrink-0 [mask-image:url('/icon-mail.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-mail.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                <a href="mailto:nexopixelx@gmail.com?subject=Contacto%20Desde%20Web" className="hover:text-purple-400 transition-colors">nexopixelx@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 bg-[#ac19e5] inline-block shrink-0 [mask-image:url('/icon-phone.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-phone.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                <p>0416-7428059</p>
              </div>
            </div>

            <div className="space-y-4 md:text-right">
              <h5 className="text-[#d5d5d5] font-semibold text-base md:block hidden">{t('siguenos')}</h5>
              <div className="flex gap-5 md:justify-end">
                <a href="https://www.instagram.com/nexopixel_25/" target="_blank" rel="noopener noreferrer" className="group">
                  <span className="w-5 h-5 bg-[#959595] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-instagram.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-instagram.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                </a>
                <a href="#" className="group">
                  <span className="w-5 h-5 bg-[#959595] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-facebook.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-facebook.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                </a>
                <a href="#" className="group">
                  <span className="w-5 h-5 bg-[#959595] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-github.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-github.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2b71ff] pt-6 pb-6 text-center text-xs text-gray-500">
            © {t('derechosReservados')}
          </div>
        </div>
      </footer>

    </main>
  );
}