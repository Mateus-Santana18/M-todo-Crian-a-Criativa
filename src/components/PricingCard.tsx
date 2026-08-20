import React from 'react';
import { CHECKOUT_URL, CHECKOUT_ESSENCIAL_URL } from '../data';
import { Check, Sparkles, Lock } from 'lucide-react';

export default function PricingCard() {
  React.useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    // Observer function for both buttons
    const observerCallback = (entries: IntersectionObserverEntry[], observerInstance: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'ViewContent');
            console.log('Meta Pixel: ViewContent event tracked on visibility');
          }
          observerInstance.unobserve(entry.target);
        }
      });
    };

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(observerCallback, observerOptions);
      const ctaCompleto = document.getElementById('checkout_completo');
      const ctaEssencial = document.getElementById('checkout_essencial');
      if (ctaCompleto) observer.observe(ctaCompleto);
      if (ctaEssencial) observer.observe(ctaEssencial);
    }
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const handleCheckoutClick = (contentName: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', { content_name: contentName });
      console.log(`Meta Pixel: AddToCart tracked for ${contentName}`);
    }
  };

  return (
    <section id="comparativo" data-section="Preços" className="py-16 px-4 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="bg-[#ef4444] text-white font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-sm animate-bounce inline-block">
            🔥 DESCONTO DE 85% APENAS HOJE
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-8">
          
          {/* CARD 1: ESSENCIAL */}
          <div className="order-2 md:order-1 flex flex-col rounded-3xl overflow-hidden bg-[#1E293B] text-white shadow-xl border-2 border-slate-700 relative transition duration-300 w-full max-w-[400px]">
            {/* Discreeet banner */}
            <div className="bg-slate-800 text-slate-400 text-center font-bold py-2 text-[10px] sm:text-xs uppercase tracking-widest border-b border-slate-700">
              IDEAL PARA COMEÇAR
            </div>
            
            <div className="p-6 sm:p-8 text-center flex flex-col">
              <h2 className="font-fredoka text-2xl sm:text-3xl font-extrabold mb-3 text-white tracking-tight">
                Kit Criança Criativa Essencial
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Para quem quer começar com atividades simples e criativas longe das telas.
              </p>

              <ul className="space-y-4 mb-6 text-left">
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    50 Atividades Criativas
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Para Crianças de 3 a 10 Anos
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Atividades Simples para Fazer em Casa
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Estímulos à Criatividade e ao Raciocínio
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Atividades para Fazer em Família
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Acesso Imediato
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Material 100% Digital
                  </span>
                </li>
              </ul>

              {/* Pricing Section */}
              <div className="text-center bg-slate-900/40 p-6 rounded-2xl border border-white/5">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1">
                  Pagamento único
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-5">
                  <span className="text-xl font-bold text-white/80">R$</span>
                  <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">9</span>
                  <span className="text-2xl font-extrabold text-slate-300">,90</span>
                </div>

                <a
                  id="checkout_essencial"
                  href={CHECKOUT_ESSENCIAL_URL}
                  onClick={() => handleCheckoutClick("Kit Criança Criativa Essencial")}
                  className="block w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold text-lg py-4 px-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide transform active:scale-95"
                >
                  QUERO O KIT ESSENCIAL
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: MAIS ESCOLHIDO (COMPLETO) */}
          <div className="order-1 md:order-2 flex flex-col rounded-3xl overflow-hidden bg-[#1E293B] text-white shadow-2xl border-4 border-[#E4A107] relative transform md:scale-[1.03] transition duration-300 w-full max-w-[420px] z-10">
            {/* Top Banner Accent */}
            <div className="bg-[#E4A107] text-[#0F172A] text-center font-bold py-2 text-xs uppercase tracking-widest">
              ⭐ MAIS ESCOLHIDO
            </div>

            <div className="p-6 sm:p-8 text-center flex flex-col">
              <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold mb-3 text-white tracking-tight">
                Método Criança Criativa Completo
              </h2>
              <p className="text-[#E4A107] font-medium text-sm mb-6 px-2">
                Tudo o que você precisa para reduzir as telas e estimular a criatividade todos os dias.
              </p>

              <ul className="space-y-4 mb-6 text-left">
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    +150 Atividades Criativas
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Para Crianças de 0 a 12 Anos
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Desafio de 7 Dias
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Oficina da Escrita Criativa
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Guia da Família Criativa
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Desafios Matemáticos
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Acesso Imediato
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </span>
                  <span className="text-gray-100 font-semibold text-sm sm:text-base">
                    Material 100% Digital
                  </span>
                </li>
              </ul>

              {/* Pricing Section */}
              <div className="text-center bg-slate-900/60 p-6 rounded-2xl border border-white/5 relative mt-auto">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E4A107] text-[#0F172A] font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                  POR SÓ +R$5
                </div>
                
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium mb-1 mt-2">
                  Pagamento único
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-5">
                  <span className="text-2xl font-bold text-white/90">R$</span>
                  <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight">14</span>
                  <span className="text-3xl font-extrabold text-[#22c55e]">,90</span>
                </div>

                <a
                  id="checkout_completo"
                  href={CHECKOUT_URL}
                  onClick={() => handleCheckoutClick("Método Criança Criativa Completo")}
                  className="block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg sm:text-xl py-5 px-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse uppercase tracking-wide transform active:scale-95"
                >
                  QUERO O MÉTODO COMPLETO
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Microcopy Below Cards */}
        <div className="mt-8 text-center text-sm font-semibold text-slate-500 flex items-center justify-center gap-2 flex-wrap">
          <Lock className="w-4 h-4 text-slate-400" />
          <span>Pagamento seguro • Acesso imediato • Compra única, sem mensalidade</span>
        </div>

        <div className="mt-8 max-w-lg mx-auto text-center bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-800 text-xs sm:text-sm">
          ⚠️ <strong>Atenção:</strong> O preço promocional já foi reajustado. Em breve, o valor será atualizado para R$ 37,90. Garanta seu acesso agora antes do próximo aumento.
        </div>

        {/* WhatsApp Support Button */}
        <div className="mt-8 text-center">
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
