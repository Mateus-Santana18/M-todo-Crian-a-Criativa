import React from 'react';
import { Flame } from 'lucide-react';

export default function DownsellPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#4C6FFF] selection:text-white pb-16">
      {/* 1. Etapa 2 de 3 Warning Strip - full width */}
      <div className="w-full bg-[#FF0000] text-white text-center py-3.5 px-4 font-bold text-sm sm:text-base md:text-lg tracking-wide shadow-sm flex items-center justify-center gap-2">
        <Flame className="w-5 h-5 fill-white animate-bounce" />
        <span>Etapa 2 de 3: ATENÇÃO! Não feche essa página pois ainda não acabou!</span>
      </div>

      {/* 2. Main content body (Elementor Canvas style) */}
      <div className="max-w-2xl mx-auto px-4 pt-10 sm:pt-16 text-center">
        {/* Top Header message */}
        <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-10 leading-snug">
          <b>Espere um pouco! Eu vou te dar uma última chance...</b>
        </h1>

        {/* Introduction Letter / Copy with spacious layout */}
        <div className="text-left sm:text-center text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose max-w-xl mx-auto mb-10 space-y-6 sm:space-y-8">
          <p>
            Obrigado por investir no <strong>Método Criança Criativa</strong>. Você provavelmente já recebeu seu acesso pelo e-mail, mas antes eu tenho uma última mensagem rápida para você, então, por favor, me dê mais alguns segundos do seu tempo...
          </p>
          <p>
            Estou disponibilizando uma apostila digital completa sobre datas comemorativas para você que está iniciando...
          </p>
          <p>
            Mas se você está aqui, é porque você não quis a minha oferta dessa apostila por R$24,90, mas eu estou aqui de novo.
          </p>
          <p>
            Essa apostila irá ser muito <strong>importante na sua jornada</strong>, então eu vou te dar uma última chance.
          </p>
          <p className="font-extrabold text-black text-xl sm:text-2xl pt-2">
            <strong>Você ganhou mais 20% de desconto!</strong>
          </p>
          <p>
            Sim, é isso mesmo. Apenas nessa página você terá a oportunidade de pagar apenas R$ 19,90 na “Apostila de Datas Comemorativas”!
          </p>
        </div>

        {/* Cakto 1-Click Downsell Buttons */}
        <div className="max-w-xl mx-auto mb-10 text-center">
          <cakto-upsell-buttons>
            <cakto-upsell-accept
              bg-color="#2ECC70"
              text-color="#FFFFFF"
              upsell-accept-url="members_area"
              offer-id="syrd4dk"
              app-base-url="https://app.cakto.com.br"
              offer-type="downsell"
              upsell-reject-url="https://metodocriancacriativa.vercel.app/obrigado"
            >
              SIM! EU QUERO ADICIONAR AS APOSTILAS AO MEU PEDIDO COM DESCONTO
            </cakto-upsell-accept>
            
            <cakto-upsell-reject
              upsell-reject-url="https://metodocriancacriativa.vercel.app/obrigado"
            >
              Não, eu gostaria de recusar essa oferta
            </cakto-upsell-reject>
          </cakto-upsell-buttons>
        </div>

        {/* Closing details */}
        <div className="text-left sm:text-center text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose max-w-xl mx-auto mb-10 space-y-4">
          <p>
            Essa é minha última proposta a você, espero que tome a decisão certa.
          </p>
          <p className="font-extrabold text-black text-lg sm:text-xl">
            <strong>Te vejo lá dentro, Forte abraço!</strong>
          </p>
        </div>

        {/* Support section (WhatsApp) */}
        <div className="border-t border-slate-100 pt-8 mb-10 text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            Dúvidas sobre a oferta? Fale com o suporte
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5548988782641&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Kit%20de%20Datas%20Comemorativas%20(Downsell)%2C%20mas%20estou%20com%20uma%20d%C3%BAvida%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.63-1.023-5.101-2.887-6.963C16.578 1.944 14.103.92 11.47.92 6.035.92 1.617 5.339 1.615 10.78c-.001 1.69.453 3.336 1.316 4.786L1.91 21.041l5.737-1.505zm12.355-6.8c-.33-.164-1.943-.96-2.244-1.07-.301-.109-.52-.164-.74.164-.22.33-.85 1.07-1.04 1.28-.19.21-.38.24-.71.077-.33-.164-1.393-.513-2.653-1.638-.98-.874-1.64-1.953-1.83-2.28-.19-.33-.02-.51.145-.672.15-.145.33-.33.495-.494.165-.165.22-.28.33-.495.11-.21.055-.39-.03-.55-.08-.164-.74-1.785-1.013-2.441-.267-.643-.536-.556-.74-.566-.21-.01-.448-.01-.687-.01-.24 0-.632.09-1.013.495-.38.41-1.452 1.42-1.452 3.46 0 2.04 1.485 4.015 1.69 4.29 2.04 2.8 4.218 4.26 6.3 5.06 2.08.8 2.76.64 3.74.49 1 .15 2.244-.92 2.56-1.81.316-.89.316-1.65.22-1.81-.09-.165-.3-.26-.63-.425z"/>
            </svg>
            <span>Falar Conosco no WhatsApp</span>
          </a>
        </div>

        {/* Support & Footer Links */}
        <div className="border-t border-slate-100 pt-8 text-center max-w-xl mx-auto text-xs text-slate-400 space-y-4">
          <p>
            Método Criança Criativa © 2026 Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-6 font-semibold">
            <a
              href="https://metodocriancacriativa.vercel.app/politica-de-privacidade"
              className="hover:text-[#4C6FFF] transition duration-200"
            >
              Política de Privacidade
            </a>
            <span>|</span>
            <a
              href="https://metodocriancacriativa.vercel.app/termos-de-uso"
              className="hover:text-[#4C6FFF] transition duration-200"
            >
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
