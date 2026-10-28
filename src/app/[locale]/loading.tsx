import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Loading() {

    const tLoading = useTranslations("Loading");

  return (
    <div className="fixed inset-0 z-50 bg-[#060407] flex flex-col items-center justify-center gap-6">
      <div className="absolute w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-2 border-transparent border-t-gold border-r-amber animate-spin" />

        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <Image
            src="/logo-icon.webp"
            alt="Cargando NexoPixel X"
            width={40}
            height={35}
            className="h-auto"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 z-10">
        <span className="font-extrabold text-sm text-white tracking-widest font-heading uppercase">
          NexoPixel <span className="text-gold">X</span>
        </span>
        <span className="text-[10px] text-slate-400 tracking-wider uppercase animate-pulse">
          {tLoading("span")}...
        </span>
      </div>
    </div>
  );
}