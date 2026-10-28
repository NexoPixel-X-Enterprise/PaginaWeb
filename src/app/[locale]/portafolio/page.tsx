'use client'

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

// Estructura de cada proyecto
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
}

// Proyectos de la galeria
const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Accesorios Savannah - Landing Page",
    description: "proyect-descriptions.proy-1",
    image: "/portfolio/acc-savannah-preview.webp",
    liveUrl: "https://acc-savannah.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind V4", "Framer Motion", "Resend", "Turnstile"]
  },
  {
    id: "2",
    title: "SaaS Dashboard",
    description: "proyect-descriptions.proy-2",
    image: "/portfolio/fastecom-preview.webp",
    liveUrl: "https://fastecom-dev.vercel.app",
    tags: ["Next.js", "NextAuth.js", "Tailwind V4", "NestJS", "Framer Motion", "Turnstile"]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const tPortfolio = useTranslations("Portfolio");

  return (
    <main 
        onMouseMove={handleMouseMove}
        className="relative min-h-screen bg-primary-background pt-36 pb-20 md:pt-48 md:pb-32 px-4 md:p-8 overflow-hidden"
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

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold font-heading">
            {tPortfolio("span")}
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            <p className="bg-[linear-gradient(135deg,#ffffff_0%,#ffaa44_40%,#ff5500_80%,#ff2200_100%)] bg-clip-text text-transparent drop-shadow-md py-2">{tPortfolio("title")}</p>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            {tPortfolio("subtitle")}
          </p>
        </div>

        {/* Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-glass-card border border-gold/20 rounded-3xl overflow-hidden hover:border-gold/60 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,119,0,0.15)] hover:shadow-[0_0_30px_-5px_rgba(255,170,68,0.3)] hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-64 w-full bg-black/60 overflow-hidden border-b border-gold/15">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060407] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                  <div className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl bg-gradient-to-r from-amber via-gold to-crimson shadow-lg shadow-amber/20 transition-all duration-300 hover:scale-105">
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-primary-background rounded-[10px] text-white hover:bg-transparent hover:text-black font-heading tracking-wide">
                        {tPortfolio("live-btn")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer de proyecto */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-copper/30 border border-amber/25 text-[11px] font-semibold text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pantalla completa */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col lg:flex-row overflow-hidden animate-fade-in">
          
          {/* Cerrar pantalla completa */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-black/80 border border-gold/40 text-gold hover:text-white hover:border-gold flex items-center justify-center transition-all cursor-pointer shadow-lg"
            aria-label="Cerrar vista previa"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>

          {/* Vista precia de proyecto */}
          <div className="flex-1 h-[60vh] lg:h-full bg-black relative flex flex-col">
            <div className="p-3 bg-[#0a070c] border-b border-gold/15 flex items-center justify-between px-6">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Vista previa en vivo
              </span>
              <span className="text-xs text-slate-500 truncate max-w-xs">{selectedProject.liveUrl}</span>
            </div>

            <iframe
              src={selectedProject.liveUrl}
              title={`Vista previa de ${selectedProject.title}`}
              className="w-full h-full border-none"
            />
          </div>

          {/* Detalles de proyecto */}
          <div className="w-full lg:w-[380px] xl:w-[420px] bg-[#060407] border-t lg:border-t-0 lg:border-l border-gold/25 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto h-[40vh] lg:h-full">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold font-heading">{tPortfolio("proy-title")}</span>
                <h2 className="text-2xl font-extrabold text-white font-heading mt-1">
                  {selectedProject.title}
                </h2>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-2 font-heading">{tPortfolio("proy-desc")}</h4>
                <p className="text-slate-300 text-md sm:text-lg leading-relaxed">
                  {tPortfolio(selectedProject.description)}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 font-heading">{tPortfolio("tech-stack")}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-copper/30 border border-amber/30 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visitar proyecto */}
            <div className="pt-6 border-t border-gold/15 mt-6">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber via-gold to-crimson text-black font-bold font-heading text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/40 transition-all"
              >
                <span>Visitar sitio web</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}