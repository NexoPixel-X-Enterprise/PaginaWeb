'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import { sendEmail } from "@/src/lib/resend/resend"; 
import { WppIcon, MailIcon, PhoneIcon } from "../ui/Icons";

export default function Contactanos() {
  const t = useTranslations("Contact");
  
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
       
        alert(t('successfully-send-warning', { nombre: formData.nombre }));
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        
        alert(t('error-send-warning', { error: result.error || "..." }));
      } 

    } catch (error) {
      console.error("Error al conectar con la Server Action:", error);
      alert(t('unexpected-error-warning'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="bg-[#070913] bg-[radial-gradient(circle_at_center,_#001133_0%,_#050A15_40%)] min-h-screen text-white pt-16 flex flex-col justify-between">
      
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 flex-grow mb-16">
        <div className="text-center mb-16">
          {/* Título Principal de Contacto */}
          <h1 className="text-4xl font-header tracking-tight text-[#d5d5d5]">{t('contact-title')}</h1>
        </div>
        {/*Bloque para enviar mensaje*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 bg-[#ac19e51A] p-8 rounded-2xl shadow-xl">
        
            <h2 className="text-2xl font-header mb-6">{t('form-title')}</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-[#d5d5d5] font-body mb-1">{t('name-label')}</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
                  placeholder={t('name-placeholder')} 
                />
              </div>

              <div>
                <label className="block text-sm font-body text-[#d5d5d5] mb-1">{t('email-label')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
                  placeholder={t('email-placeholder')} 
                />
              </div>

              <div>
                <label className="block text-sm  font-body text-[#d5d5d5] mb-1">{t('subject-label')}</label>
                <input 
                  type="text" 
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
                  placeholder={t('subject-placeholder')} 
                />
              </div>

              <div>
                <label className="block text-sm font-body text-[#d5d5d5] mb-1">{t('message-label')}</label>
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 min-h-[120px]" 
                  placeholder={t('message-placeholder')}
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button 
                type="submit" 
                disabled={saving} 
                className="group relative flex items-center justify-center gap-3 w-full px-6 py-2.5 pr-12 hover:pr-6 border-2 border-[#0055FF] rounded-full cursor-pointer hover:bg-[#0055FF] transition-all duration-500 font-medium shadow-[0_0_5px_rgba(0,85,255)] font-heading"
              >
                <div className="relative flex items-center justify-center transition-all duration-500 ease-in-out pr-8 group-hover:pr-0">
                  <span  className="transition-all duration-500 ease-in-out whitespace-nowrap">
                    {saving ? t('submit-button-loading') : t('submit-button')}
                  </span>
                  <span className='absolute right-0 flex items-center transition-all duration-500 ease-in-out group-hover:opacity-0  group-hover:scale-0  group-hover:w-0  group-hover:overflow-hidden'>
                    <WppIcon className='text-[#0055FF] drop-shadow-[0_0_8px_rgba(0,85,255,0.8)]'></WppIcon>
                  </span>
                </div>
              </button>
            </form>
          </div>

          {/* Bloques de la derecha: Información y Whatsapp*/}
          <div className="space-y-6">
            <div className="bg-[#ac19e51A] p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-[#d5d5d5] font-header mb-4">{t('contact-info-title')}</h3>
              <div className="flex items-center gap-3 text-[#d5d5d5] mb-4">
                <MailIcon className="text-[#2B71FF] w-6"></MailIcon>
                <p className="text-sm">
                  Email: <a href="mailto:nexopixelx@gmail.com?subject=Consulta%20NexoPixel%20X" className="text-[#d5d5d5] hover:text-[#AC19E5] transition-colors ml-1">nexopixelx@gmail.com</a>
                </p>
              </div>
               
              <div className="flex items-center gap-3 text-[#d5d5d5]">
                <PhoneIcon className="text-[#2B71FF] w-6"></PhoneIcon>
                <p className="text-sm">
                  {t('phone-label')}: <a href="tel:+584167428059" className="text-[#d5d5d5] hover:text-[#AC19E5] transition-colors ml-1">0416-7428059</a>
                </p>
              </div>
            </div>

            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-8 md:px-16 my-14">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ac19e5] to-transparent opacity-80"></div>
            </div>
            {/*Bloque de Whatsapp, Verificar el teléfono del whatsapp */}
            <div className="bg-[#2B71FF1A] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold font-header text-[#d5d5d5] mb-4">{t('direct-contact-title')}</h4>
              <p className="text-[#d5d5d5] font-body mb-8">{t('whatsapp-label')}</p>
              <a
                href="https://wa.me/584167428059?text=Hola%20NexoPixel%20X,%20me%20gustaría%20obtener%20más%20información."
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full px-6 py-2.5 pr-12 hover:pr-6 border-2 border-[#AC19E5] rounded-full cursor-pointer hover:bg-[#AC19E5] transition-all duration-500 font-medium shadow-[0_0_5px_rgba(172,25,229)] font-heading"
              >
                <div className="relative flex items-center justify-center transition-all duration-500 ease-in-out pr-8 group-hover:pr-0">
                  <span  className="transition-all duration-500 ease-in-out whitespace-nowrap">
                    {t('whatsapp-button')}
                  </span>
                  <span className='absolute right-0 flex items-center transition-all duration-500 ease-in-out group-hover:opacity-0  group-hover:scale-0  group-hover:w-0  group-hover:overflow-hidden'>
                    <WppIcon className='text-[#AC19E5] drop-shadow-[0_0_5px_rgba(172,25,229)]'></WppIcon>
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}