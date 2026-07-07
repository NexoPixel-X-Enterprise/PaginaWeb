'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";



  
export default function Home() {
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
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' }, // Corregido 'application'
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    
    if (response.ok) {
      // Corregido a comillas invertidas (backticks) para que funcione la variable
      alert(`¡Gracias ${formData.nombre}! Tu mensaje ha sido enviado exitosamente.`);
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    } else {
      // Corregido a comillas invertidas y añadida la llave de cierre del else que faltaba
      alert(`Error al enviar el mensaje: ${result.error || "No se pudo enviar el mensaje."}`);
    } 

  } catch (error) {
    console.error("Error al conectar con la API:", error);
    alert("Ocurrió un error inesperado al intentar enviar el mensaje.");
  } finally {
    setSaving(false);
  }
};

  return (
    
    <main className="bg-[#070913] bg-[radial-gradient(circle_at_center,_#002266_0%,_#070913_50%)] min-h-screen text-white pt-16 pb-8 px-4 sm:px-6">
      <div className = "max-w-6xl mx-auto flex flex-col min-h-screen justify-between">
        <div className = "text-center mb-16">
          <h1 className = "text-4xl font-semibold tracking-tight text-[#d5d5d5]">Contáctanos</h1>
      </div>
      <div className = "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

    <div className = "lg:col-span-2 bg-gradient-to-b from-[#161238] to-[#100c2a] p-8 rounded-2xl border border-blue-900/40 shadow-xl">
    <h2 className = "text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
   
    {/* Formulario de contacto con campos para nombre, email, asunto y mensaje */}
    <form className = "space-y-4" onSubmit={handleSubmit}>
    <label className = "block text-sm text-[#d5d5d5] mb-1">Nombre Completo</label>
<input 
      type="text" 
      name="nombre"
      value={formData.nombre}
      onChange={handleChange}
      required
      className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
      placeholder="Tu nombre" 
    />
    <label className = "block text-sm text-[#d5d5d5] mb-1">Email</label>
    <input 
      type="email" 
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
      placeholder="Tu email" 
    />
    <label className = "block text-sm text-[#d5d5d5] mb-1">Asunto</label>
    <input 
      type="text" 
      name="asunto"
      value={formData.asunto}
      onChange={handleChange}
      required
      className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
      placeholder="El asunto de tu mensaje" 
    />
    <label className = "block text-sm text-[#d5d5d5] mb-1">Mensaje</label>
    <textarea 
      name="mensaje"
      value={formData.mensaje}
      onChange={handleChange}
      required
      className="w-full bg-[#18143c] border border-blue-800/50 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500" 
      placeholder="Tu mensaje"
    ></textarea>
{/* Botón de envío con estado de carga */}
    <button 
    type="submit" 
    disabled={saving} 
    className="group w-full mt-6 bg-[#16123f] border-2 border-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-full py-3 font-medium transition flex items-center justify-center gap-2"
  >
    {saving ? "Enviando..." : "Enviar Mensaje"}
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
      {/* Contenedor con espacio vertical entre bloques de información */}
    <div className = "space-y-6">
    <div className = "bg-[#120e2e] p-8 rounded-2xl border border-purple-900/20 shadow-xl">
    <h3 className = "text-lg font-semibold mb-4">Información de Contacto</h3>
    <div className="flex items-center gap-3 text-[#d5d5d5] mb-4">
  {/* El icono del sobre */}
  <span 
    className="w-5 h-5 bg-[#ac19e5] transition-colors inline-block shrink-0" 
    style={{
      maskImage: 'url(/icon-mail.svg)', 
      WebkitMaskImage: 'url(/icon-mail.svg)', 
      maskSize: 'contain', 
      WebkitMaskSize: 'contain', 
      maskRepeat: 'no-repeat', 
      WebkitMaskRepeat: 'no-repeat'
    }}
  />
  
  {/* El texto y enlace del correo juntos */}
  <p className="text-sm ">
    Email: <a href="mailto:nexopixelx@gmail.com?subject=Consulta%20NexoPixel%20X" className="text-white hover:text-purple-400 transition-colors ml-1">nexopixelx@gmail.com</a>
  </p>
</div>
   
  <div className="flex items-center gap-3 text-[#d5d5d5] mb-4">
  
  <span 
    className="w-5 h-5 bg-[#2b71ff] transition-colors inline-block shrink-0" 
    style={{
      maskImage: 'url(/icon-phone.svg)', 
      WebkitMaskImage: 'url(/icon-phone.svg)', 
      maskSize: 'contain', 
      WebkitMaskSize: 'contain', 
      maskRepeat: 'no-repeat', 
      WebkitMaskRepeat: 'no-repeat'
    }}
  />
  
  {/* Enlace del celular */}
  <p className="text-sm ">
    Teléfono: <a href="tel:+584142134567" className="text-white hover:text-purple-400 transition-colors ml-1">04167428059</a>
  </p>
</div>
   
    </div>
    <div className = "bg-[#120e2e] p-8 rounded-2xl border border-purple-900/20 shadow-xl">
    <h4 className = "text-lg font-semibold mb-4">Contacto Directo</h4>
    <p className = "text-[#d5d5d5] mb-2">Háblanos por Whatsapp</p>
  
<a 
  href="https://wa.me/584167428059?text=Hola%20NexoPixel%20X,%20me%20gustaría%20obtener%20más%20información." 
  target="_blank" 
  rel="noopener noreferrer"
  className="group w-full mt-6 bg-[#16123f] border-2 border-purple-500 hover:bg-[#6e1092] text-white rounded-full py-3 font-medium transition flex items-center justify-center gap-2"
>
  Contactar por Whatsapp
    <span 
    className="w-6 h-6 bg-[#8914B7] group-hover:bg-[#d5d5d5] transition-colors inline-block" 
    style={{
      maskImage: 'url(/icon-wpp.svg)', 
      WebkitMaskImage: 'url(/icon-wpp.svg)', 
      maskSize: 'contain', 
      WebkitMaskSize: 'contain', 
      maskRepeat: 'no-repeat', 
      WebkitMaskRepeat: 'no-repeat'
    }}
  /></a>
    </div>
    </div>

    
      </div>
{/* SECCIÓN INFERIOR: Footer adaptado al diseño de la imagen */}
<footer className="border-t border-blue-500/50 pt-12 mt-32 w-full bg-[#070913] bg-[radial-gradient(circle_at_bottom,_#4a0666_0%,_#070913_45%)] relative overflow-hidden">
  {/* Contenedor interno para mantener los textos alineados con el resto de la página */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400 pb-8">
      
      {/* Columna Footer 1: Logo / Descripción */}
      <div className="space-y-3">
        <div className="text-white font-bold text-lg tracking-wider text-[#d5d5d5]">NexoPixel X</div>
        <p className="leading-relaxed max-w-xs text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      {/* Contacto breve con iconos alineados */}
      <div className="space-y-4">
        <h5 className="text-[#d5d5d5] font-semibold text-base">Contacto</h5>
        
        <div className="flex items-center gap-2.5">
          <span className="w-4 h-4 bg-[#ac19e5] inline-block shrink-0 [mask-image:url('/icon-mail.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-mail.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
          <p>nexopixelx@gmail.com</p>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="w-4 h-4 bg-[#ac19e5] inline-block shrink-0 [mask-image:url('/icon-phone.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-phone.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
          <p>0416-7428059</p>
        </div>
      </div>

      {/*Redes Sociales*/}
      <div className="space-y-4 md:text-right">
        <h5 className="text-[#d5d5d5] font-semibold text-base md:block hidden">Síguenos</h5>
        <div className="flex gap-5 md:justify-end">
          
          {/* Icono de Instagram */}
          <a href="https://www.instagram.com/nexopixel_25/" target="_blank" rel="noopener noreferrer" className="group">
            <span className="w-5 h-5 bg-[#959595] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-instagram.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-instagram.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
          </a>

          {/* Icono de Facebook */}
          <a href="#" className="group">
            <span className="w-5 h-5 bg-[#959595] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-facebook.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-facebook.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
          </a>

          {/* Icono de GitHub */}
          <a href="#" className="group">
            <span className="w-5 h-5 bg-[#959595] group-hover:bg-[#d5d5d5] transition-colors inline-block [mask-image:url('/icon-github.svg')] [mask-size:contain] [mask-repeat:no-repeat] [-webkit-mask-image:url('/icon-github.svg')] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat]" />
          </a>

        </div>
      </div>

    </div>

    {/* Línea final de Copyright */}
    <div className="border-t border-white/5 pt-6 pb-6 text-center text-xs text-gray-500">
      © 2026 NexoPixel X Todos los derechos reservados.
    </div>

  </div>
</footer>
    
      </div>

    </main>
  );
}
