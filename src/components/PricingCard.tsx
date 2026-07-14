import React from 'react';
import { HERO_MOCKUP_IMAGE, CHECKOUT_URL } from '../data';
import { Check, ShieldAlert, Sparkles, Lock } from 'lucide-react';

export default function PricingCard() {
  React.useEffect(() => {
    const offerButton = document.getElementById('cta-purchase');
    if (offerButton && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if ((window as any).fbq) {
              (window as any).fbq('track', 'ViewContent');
              console.log('Meta Pixel: ViewContent event tracked on purchase button visibility');
            }
            observerInstance.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(offerButton);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="comparativo" data-section="Preços" className="py-16 px-4 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <span className="bg-[#ef4444] text-white font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-sm animate-bounce inline-block">
            🔥 DESCONTO DE 85% APENAS HOJE
          </span>
        </div>

        <div className="rounded-3xl overflow-hidden bg-[#1E293B] text-white shadow-2xl flex flex-col border-4 border-[#E4A107] relative transform hover:scale-[1.01] transition duration-300">
          {/* Top Banner Accent */}
          <div className="bg-[#E4A107] text-[#0F172A] text-center font-bold py-2 text-xs uppercase tracking-widest">
            Acesso Completo + 3 Bônus Inclusos
          </div>

          <div className="p-6 sm:p-10 text-center flex flex-col flex-1">
            <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold mb-6 text-white tracking-tight">
              Método Criança Criativa
            </h2>

            <div className="relative mb-8 flex justify-center">
              <img
                src={HERO_MOCKUP_IMAGE}
                alt="Kit Método Criança Criativa Pacote Completo"
                className="w-full h-auto max-h-[220px] object-contain"
              />
            </div>

            <ul className="space-y-4 mb-8 text-left flex-1">
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  +150 Atividades Criativas e Lúdicas (0 a 12 anos)
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Kit Digital Completo Organizado por Idade
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Bônus #1: Guia da Família Criativa
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Bônus #2: Oficina da Escrita Criativa
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Bônus #3: Desafios Matemáticos
                </span>
              </li>
            </ul>

            {/* Pricing Section */}
            <div className="text-center mt-auto bg-slate-900/60 p-6 rounded-2xl border border-white/5">
              <p className="text-gray-400 line-through text-lg font-medium mb-1">
                de R$ 49,00
              </p>
              <p className="text-xs uppercase tracking-wider text-[#22c55e] font-extrabold mb-1">
                por apenas pagamento único
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-2xl font-bold text-white/90">R$</span>
                <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight">14</span>
                <span className="text-3xl font-extrabold text-[#22c55e]">,90</span>
              </div>

              <a
                id="cta-purchase"
                href={CHECKOUT_URL}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'AddToCart');
                  }
                }}
                className="cta-checkout block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xl py-5 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse uppercase tracking-wide transform active:scale-95"
              >
                ACESSAR AGORA POR R$ 14,90
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-5 pt-4 border-t border-white/10">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#22c55e]" /> Acesso Imediato
                </span>
                <span>·</span>
                <span>Pagamento Único</span>
                <span>·</span>
                <span>Garantia 7 Dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-800 text-xs sm:text-sm">
          ⚠️ <strong>Atenção:</strong> O preço promocional já foi reajustado de R$ 9,90 para R$ 14,90. Em breve, o valor será atualizado para R$ 37,90. Garanta seu acesso agora antes do próximo aumento.
        </div>

        {/* WhatsApp Support Button */}
        <div className="mt-6 text-center">
          <a
            href="https://api.whatsapp.com/send?phone=5548988782641&text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20M%C3%A9todo%20Crian%C3%A7a%20Criativa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.417 9.86-9.86.002-2.63-1.023-5.101-2.887-6.963C16.578 1.944 14.103.92 11.47.92 6.035.92 1.617 5.339 1.615 10.78c-.001 1.69.453 3.336 1.316 4.786L1.91 21.041l5.737-1.505zm12.355-6.8c-.33-.164-1.943-.96-2.244-1.07-.301-.109-.52-.164-.74.164-.22.33-.85 1.07-1.04 1.28-.19.21-.38.24-.71.077-.33-.164-1.393-.513-2.653-1.638-.98-.874-1.64-1.953-1.83-2.28-.19-.33-.02-.51.145-.672.15-.145.33-.33.495-.494.165-.165.22-.28.33-.495.11-.21.055-.39-.03-.55-.08-.164-.74-1.785-1.013-2.441-.267-.643-.536-.556-.74-.566-.21-.01-.448-.01-.687-.01-.24 0-.632.09-1.013.495-.38.41-1.452 1.42-1.452 3.46 0 2.04 1.485 4.015 1.69 4.29 2.04 2.8 4.218 4.26 6.3 5.06 2.08.8 2.76.64 3.74.49 1 .15 2.244-.92 2.56-1.81.316-.89.316-1.65.22-1.81-.09-.165-.3-.26-.63-.425z"/>
            </svg>
            <span>Dúvidas? Fale Conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
