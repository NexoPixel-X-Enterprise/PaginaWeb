'use client'

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const tNotFound = useTranslations("NotFound");

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="relative flex justify-center items-center min-h-screen bg-primary-background pt-36 pb-20 md:pt-48 md:pb-32 px-4 md:p-8 overflow-hidden"
      style={{
          ['--mouse-x' as string]: `${mousePosition.x}px`,
          ['--mouse-y' as string]: `${mousePosition.y}px`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffaa44' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
    <div 
      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      style={{
        background: `radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), rgba(255, 119, 0, 0.12), transparent 70%)`
      }}
    />

      <div className="max-w-md w-full text-center space-y-8 relative z-10 bg-glass-card p-8 sm:p-10 rounded-3xl border border-gold/25 shadow-[0_0_25px_-5px_rgba(255,119,0,0.25)]">
        
        {/* Icono animado */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-copper/30 border border-amber/40 flex items-center justify-center text-gold text-3xl shadow-lg shadow-amber/10">
          <FontAwesomeIcon icon={faExclamationTriangle} className="animate-bounce" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold font-heading">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            {tNotFound("title")}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {tNotFound("desc")}
          </p>
        </div>

        {/* Botón de retorno a la Home */}
        <div className="pt-2">
          <Link
            href="/"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber via-gold to-crimson text-black font-bold font-heading text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/40 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{tNotFound("btn")}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}