'use client'

import { useTranslations } from "next-intl";
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  WindowIcon, 
  CheckIcon,
  ChatBubbleOvalLeftEllipsisIcon 
} from '@heroicons/react/24/outline';

//Struct para las tarjetas
interface Vineta {
  id: string;
  Texto: string;
}

interface Tarjeta {
  id: string;
  Titulo: string;
  Descripcion: string;
  Icono: React.ElementType;
  Color: string;
  Caracteristicas: Vineta[];
}

//Arreglo de tarjetas
const Tarjetas: Tarjeta[] = [
  {
    id: 'Telefono',
    Titulo: 'Titulo1',
    Descripcion: 'Descripcion1',
    Icono: DevicePhoneMobileIcon,
    Color: 'border-purple-900 shadow-[0_0_15px_rgba(88,28,135,0.15)]',
    Caracteristicas: [
      { id: 'M1', Texto: 'TextoT1' },
      { id: 'M2', Texto: 'TextoT2' },
      { id: 'M3', Texto: 'TextoT3' },
    ]
  },
  {
    id: 'Escritorio',
    Titulo: 'Titulo2',
    Descripcion: 'Descripcion2',
    Icono: ComputerDesktopIcon,
    Color: 'border-blue-900 shadow-[0_0_15px_rgba(30,58,138,0.15)]',
    Caracteristicas: [
      { id: 'E1', Texto: 'TextoE1' },
      { id: 'E2', Texto: 'TextoE2' },
      { id: 'E3', Texto: 'TextoE3' },
    ]
  },
  {
    id: 'Web',
    Titulo: 'Titulo3',
    Descripcion: 'Descripcion3',
    Icono: WindowIcon,
    Color: 'border-indigo-900 shadow-[0_0_15px_rgba(49,46,129,0.15)]',
    Caracteristicas: [
      { id: 'W1', Texto: 'TextoW1' },
      { id: 'W2', Texto: 'TextoW2' },
      { id: 'W3', Texto: 'TextoW3' },
    ]
  }
];

export default function Servicios() {
  const t = useTranslations("Servicios");

  //Arreglo buffer
  const TarjetasProyecto = [];

  //Bucle para leer el arreglo Tarjetas
  for (let i = 0; i < Tarjetas.length; i++) {
    const Tar = Tarjetas[i];
    
    //Arreglo para vinetas
    const VinetasHTML = [];

    //Bucle vinetas
    for (let j = 0; j < Tar.Caracteristicas.length; j++) {
      const Caracteristica = Tar.Caracteristicas[j];
      
      VinetasHTML.push(
        <li key={Caracteristica.id} className="flex gap-3 text-sm text-slate-400">
          <CheckIcon className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>{t(Caracteristica.Texto)}</span>
        </li>
      );
    }

    //Armar tarjeta
    TarjetasProyecto.push(
      <div key={Tar.id} className={`flex flex-col bg-[#0B1221] rounded-xl p-8 border ${Tar.Color} transition-transform hover:-translate-y-1`}>
        <div className="flex items-center gap-4 mb-6">
          <Tar.Icono className="w-8 h-8 text-slate-400 stroke-1" />
          <h3 className="text-xl font-medium text-slate-200">{t(Tar.Titulo)}</h3>
        </div>
        
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          {t(Tar.Descripcion)} 
        </p>
        
        <ul className="flex-grow space-y-4 mb-10">
          {VinetasHTML}
        </ul>
        
        <button className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-indigo-600 bg-transparent text-slate-300 hover:bg-indigo-900/40 transition-colors">
          <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
          <span>{t("Consultar")}</span>
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#060B19] py-20 px-4 flex justify-center font-sans">
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl font-semibold text-center text-white mb-12 border-b border-blue-950 pb-4">
          {t("Servicios")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TarjetasProyecto}
        </div>
      </div>
    </main>
  );
}
