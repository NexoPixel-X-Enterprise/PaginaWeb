'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Turnstile } from '@marsidev/react-turnstile';
import { sendEmail, SendEmailProps } from "@/src/lib/resend/resend";

export default function Contact(){
    const tContact = useTranslations("Contact");

    const [token, setToken] = useState<string>('');

    const [formData, setFormData] = useState<SendEmailProps>({
        nombre: "",
        email: "",
        idioma: "Español",
        mensaje: ""
    });

    const [errors, setErrors] = useState({
        nombre: "",
        email: "",
        mensaje: "",
        robot: ""
    });

    const [statusMessage, setStatusMessage] = useState<{ success?: boolean; text?: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);

    const newErrors = { nombre: "", email: "", mensaje: "", robot: "" };
    let isValid = true;

    if (!formData.nombre.trim()) {
        newErrors.nombre = tContact("FormMessages.empty-name");
        isValid = false;
    }

    if (!formData.email.trim()) {
        newErrors.email = tContact("FormMessages.empty-mail");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = tContact("FormMessages.wrong-name");
        isValid = false;
    }

    if (!formData.mensaje.trim()) {
        newErrors.mensaje = tContact("FormMessages.empty-msg");
        isValid = false;
    }

    if (!token) {
        newErrors.robot = tContact("FormMessages.wrong-token");
        isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    setLoading(true);

    try {

        const result = await sendEmail(formData, token);
        
        if (result.success) {
            setStatusMessage({ success: true, text: tContact("FormMessages.success") });
            setFormData({ nombre: "", email: "", idioma: "Español", mensaje: "" });
            setToken('');
        } else {
            setStatusMessage({ success: false, text: result.error || tContact("FormMessages.error") });
        } 

    } catch {
      setStatusMessage({ success: false, text: tContact("FormMessages.server-error") });
    } finally {
        setLoading(false);
    }
  };

    return(
        <section id="contacto" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-gold font-heading">{tContact("span")}</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">{tContact("title")}</p>
                    <p className="text-slate-400 text-sm" data-i18n="contact-desc">{tContact("subtitle")}</p>
                </div>

                <form onSubmit={handleSubmit} id="contactForm" className="bg-glass-card p-8 sm:p-10 rounded-3xl border border-gold/25 shadow-[0_0_20px_-5px_rgba(255,119,0,0.25),_inset_0_0_15px_-8px_rgba(255,170,68,0.2)] space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-300 uppercase mb-2 font-heading">{tContact("Form.name-label")}</label>
                            <input 
                                type="text" 
                                id="formName" 
                                value={formData.nombre}
                                onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                                placeholder="John Doe" 
                                className={`w-full bg-primary-background/80 border rounded-xl px-4 py-3 text-xs text-white outline-none transition-all [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#060407_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] ${
                                    errors.nombre ? "border-crimson" : "border-slate-800 focus:border-gold"
                                }`} 
                            />
                            {errors.nombre && <span className="text-crimson text-[11px] mt-1.5 block font-medium">{errors.nombre}</span>}
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-300 uppercase mb-2 font-heading">{tContact("Form.mail-label")}</label>
                            <input 
                                type="email" 
                                id="formEmail" 
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                placeholder="Jhon@gmail.com" 
                                className={`w-full bg-primary-background/80 border rounded-xl px-4 py-3 text-xs text-white outline-none transition-all [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_1000px_#060407_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff] ${
                                    errors.email ? "border-crimson" : "border-slate-800 focus:border-gold"
                                }`} 
                            />
                            {errors.email && <span className="text-crimson text-[11px] mt-1.5 block font-medium">{errors.email}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-white mb-3 font-heading">3. {tContact("Form.language-label")}</label>
                        <div className="relative">
                            <select 
                                id="calcSupport" 
                                value={formData.idioma}
                                onChange={(e) => setFormData(prev => ({ ...prev, idioma: e.target.value }))}
                                className="w-full bg-copper/30 border border-slate-800 text-slate-200 text-xs rounded-xl px-4 py-3 pr-10 focus:border-gold outline-none cursor-pointer hover:border-gold/50 transition-all appearance-none"
                            >
                                <option value="Español" className="bg-[#060407] text-slate-200">Español</option>
                                <option value="English" className="bg-[#060407] text-slate-200">English</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold text-xs">
                                ▼
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase mb-2 font-heading" data-i18n="form-message">{tContact("Form.details-label")}</label>
                        <textarea 
                            id="formMessage" 
                            rows={4} 
                            value={formData.mensaje}
                            onChange={(e) => setFormData(prev => ({ ...prev, mensaje: e.target.value }))}
                            placeholder={tContact("Form.details-placeholder")} 
                            className={`w-full bg-black/80 border rounded-xl p-4 text-xs text-white outline-none resize-none transition-all ${
                                errors.mensaje ? "border-crimson" : "border-slate-800 focus:border-gold"
                            }`}
                        ></textarea>
                        {errors.mensaje && <span className="text-crimson text-[11px] mt-1.5 block font-medium">{errors.mensaje}</span>}
                    </div>

                    <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={(token) => setToken(token)}
                    />
                    {errors.robot && <span className="text-crimson text-[11px] mt-1.5 block font-medium">{errors.robot}</span>}

                    {statusMessage && (
                        <div className={`p-4 rounded-xl text-xs font-medium text-center border ${
                            statusMessage.success 
                                ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-400" 
                                : "bg-red-950/40 border-crimson/40 text-crimson"
                        }`}>
                            {statusMessage.text}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber via-gold to-crimson text-black font-bold font-heading text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-gold/40 transition-all cursor-pointer disabled:opacity-50"
                    >
                        <span data-i18n="form-btn">{loading ? "Enviando..." : tContact("Form.form-btn")}</span>
                    </button>
                </form>
            </div>
        </section>
    )
}