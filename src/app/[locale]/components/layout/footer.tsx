import { useTranslations } from "next-intl"
import { MailIcon, PhoneIcon, InstagramIcon, FacebookIcon, GithubIcon } from "../ui/Icons"

export default function Footer(){

    const t = useTranslations("Footer")

    return (
      <footer className="pt-12 pb-5 w-full bg-[#070913] bg-[radial-gradient(ellipse_at_center,_#1B0425_0%,_#050A15_50%)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-around text-sm gap-8 pb-8 max-[800px]:flex-col">
            <div className="space-y-3">
              <div className="text-white font-bold text-xl font-header tracking-wider text-[#d5d5d5]">NexoPixel X</div>
              <p className="leading-relaxed max-w-xs font-body text-[#d5d5d5aa]">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#d5d5d5] font-semibold text-base font-header text-xl">{t('contact-info-title')}</h5>
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-5"></MailIcon>
                <a href="mailto:nexopixelx@gmail.com?subject=Contacto%20Desde%20Web" className="hover:text-purple-400 transition-colors font-body">nexopixelx@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-5"></PhoneIcon>
                <p className="font-body">0416-7428059</p>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#d5d5d5] font-semibold text-base">{t('follow-us-label')}</h5>
              <div className="flex gap-5 ">
                <a href="https://www.instagram.com/nexopixel_25/" target="_blank" rel="noopener noreferrer" className="group">
                  <InstagramIcon className="drop-shadow-[0_0_3px_rgba(213,213,213,0.8)]"></InstagramIcon>
                </a>
                <a href="#" className="group">
                  <FacebookIcon className="drop-shadow-[0_0_3px_rgba(213,213,213,0.8)]"></FacebookIcon>
                </a>
                <a href="#" className="group">
                  <GithubIcon className="drop-shadow-[0_0_3px_rgba(213,213,213,0.8)]"></GithubIcon>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#2B71FF] drop-shadow-[0_0_3px_rgb(43,113,255)] my-6"></div>

          <div className="py-6 text-center font-body text-xs text-[#d5d5d5dd]">
            © {t('rights-reserved-label')}
          </div>
        </div>
      </footer>
    )
}