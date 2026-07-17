import React from 'react';
import upsellMockupImg from '../assets/upsell_mockup.webp';
import garantia7DiasImg from '../assets/garantia_7_dias.webp';

import datasComemorativasImg from '../assets/datas_comemorativas.webp';
import { ShieldCheck, Flame } from 'lucide-react';

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#4C6FFF] selection:text-white pb-16">
      {/* 1. Etapa 2 de 3 Warning Strip - full width */}
      <div className="w-full bg-[#FF0000] text-white text-center py-3.5 px-4 font-bold text-sm sm:text-base md:text-lg tracking-wide shadow-sm flex items-center justify-center gap-2">
        <Flame className="w-5 h-5 fill-white animate-bounce" />
        <span>Etapa 2 de 3: ATENÇÃO! Não feche essa página pois ainda não acabou!</span>
      </div>

      {/* 2. Main content body (Elementor Canvas style) */}
      <div className="max-w-2xl mx-auto px-4 pt-10 sm:pt-14 text-center">
        {/* Top Header message */}
        <h1 className="font-fredoka text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-3 leading-snug">
          Parabéns, pessoas como você vão longe! <br className="hidden sm:inline" />
          Eu tenho mais um recadinho pra você!
        </h1>
        
        {/* Red warning text */}
        <p className="text-[#FF0000] font-extrabold text-lg sm:text-xl uppercase tracking-wider mb-6 animate-pulse">
          NÃO feche ou recarregue esta página
        </p>

        {/* Attention block */}
        <div className="w-full bg-[#980b0b] text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-lg shadow-sm mb-8 uppercase tracking-wide">
          ANTES DE QUALQUER COISA... Aqui está uma oferta única para você.
        </div>

        {/* News block */}
        <div className="max-w-xl mx-auto text-left space-y-2 mb-8">
          <p className="text-base sm:text-lg font-bold text-black">
            <span className="text-[#FF0000] font-extrabold">Más notícias:</span> estou oferecendo isso apenas a um grupo seleto de clientes
          </p>
          <p className="text-base sm:text-lg font-bold text-black">
            <span className="text-[#00b62d] font-extrabold">Boas notícias:</span> VOCÊ está neste grupo especial hoje .. <span className="text-slate-400 font-normal">.</span>
          </p>
        </div>

        {/* Introduction Letter */}
        <div className="text-left text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 max-w-xl mx-auto mb-8 border-b border-slate-100 pb-8">
          <p>
            Obrigado por investir no nosso curso <strong>Método Criança Criativa</strong>. Você provavelmente já recebeu seu acesso pelo e-mail, mas antes eu tenho uma mensagem rápida para você, então, por favor, me dê mais alguns segundos do seu tempo...
          </p>
          <p>
            Você pode ter a oportunidade ainda hoje de adquirir as apostilas digitais de todo o processo das atividades temáticas, essa apostila vai facilitar muito na hora de planejar suas atividades com as crianças, e o melhor é que está com um preço irresistível apenas hoje, para quem adquiriu o nosso Método Criança Criativa.
          </p>
        </div>

        {/* Offer Product Title */}
        <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-black mb-6 tracking-tight">
          Apostila Completo do Curso
        </h2>

        {/* Product Image */}
        <div className="max-w-[480px] mx-auto w-full mb-8">
          <img
            src={upsellMockupImg}
            alt="Apostila Completa do Curso"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Pricing Stack section (Fiel à Referência) */}
        <div className="max-w-lg mx-auto text-center mb-8 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
            Apenas Hoje
          </h3>
          
          <p className="text-2xl sm:text-3xl font-extrabold text-[#FF0000]">
            <strong><u>de: R$ 97</u></strong>
          </p>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-black">
            Hoje por apenas
          </h3>

          <p className="text-5xl sm:text-6xl font-extrabold text-[#00b62d] tracking-tight">
            <strong><u>R$ 24,90</u></strong>
          </p>

          <p className="text-xl sm:text-2xl font-bold text-black pt-1">
            ou uma vez de 24,90!
          </p>
        </div>

        {/* Cakto 1-Click Accept Button & Cancel Trigger */}
        <div className="max-w-xl mx-auto mb-6 text-center">
          <cakto-upsell-buttons>
            <cakto-upsell-accept
              bg-color="#2ECC70"
              text-color="#FFFFFF"
              upsell-accept-url="members_area"
              offer-id="cpo3asi"
              app-base-url="https://app.cakto.com.br"
              offer-type="upsell"
              upsell-reject-url="https://metodocriancacriativa.vercel.app/downsell"
            >
              SIM! EU QUERO ADICIONAR AS APOSTILAS AO MEU PEDIDO DE TER SUCESSO EM ATIVIDADES INFANTIS
            </cakto-upsell-accept>
            
            <cakto-upsell-reject
              upsell-reject-url="https://metodocriancacriativa.vercel.app/downsell"
            >
              Não, eu gostaria de recusar essa oferta
            </cakto-upsell-reject>
          </cakto-upsell-buttons>
        </div>

        <p className="text-sm font-bold text-slate-500 mb-8 uppercase tracking-wide">
          Pagamento único. Não há renovações, nem taxas recorrentes
        </p>

        {/* Urgency explanation */}
        <div className="text-left text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 max-w-xl mx-auto mb-8 pt-6 border-t border-slate-100">
          <p className="font-extrabold text-[#FF0000] text-center text-lg sm:text-xl">
            Então, por que deixar dinheiro na mesa e não comprar o treinamento??
          </p>
          <p className="font-extrabold text-black text-center text-base sm:text-lg mb-4">
            Isso é um desconto enorme de 70% +!
          </p>
          <p className="text-slate-600 italic text-center text-xs sm:text-sm">
            ( IMPORTANTE: Este preço especial de oferta única NÃO está disponível fora desta página e o preço normal deste upgrade é R$ 197. Esta é uma oferta única a esse preço para o Upgrade, então não perca esta oferta… )
          </p>
          <p>
            A má notícia é que, se você sair desta página <span className="text-[#FF0000] font-extrabold">, NUNCA mais lhe será oferecido.</span>
          </p>
          <p>
            Esta oferta incrível está <em><strong>disponível APENAS para clientes do Método Criança Criativa</strong></em>
          </p>
          <p>
            …E se você sair desta página agora, <u>perderá para sempre essa oportunidade.</u>
          </p>
          <p>
            Normalmente, uma mega promoção dessa é vendida por R$ 97 ou mais... Mas porque você é um novo cliente... estou oferecendo a você um preço com desconto único!
          </p>
          <p className="text-[#FF0000] font-extrabold text-center text-sm sm:text-base pt-2">
            PS: Esta é uma OFERTA ÚNICA! Você nunca mais terá a oportunidade de investir nessa oportunidade… a qualquer preço.
          </p>
          <p className="text-red-600 font-extrabold text-center text-xs sm:text-sm">
            Por favor, NÃO clique fora desta página, a menos que tenha certeza absoluta de que deseja deixar passar esta oferta para sempre.
          </p>
          <p className="text-[#00b62d] font-extrabold text-center text-sm sm:text-base pt-2">
            PPS: Sua compra é 100% garantida por 7 dias. Se você não estiver satisfeito dentro desse período, eu lhe darei um reembolso total, sem perguntas.
          </p>
        </div>

        {/* Seu Investimento Especial */}
        <p className="font-extrabold text-black text-base sm:text-lg max-w-xl mx-auto mb-8">
          Seu investimento único especial para toda a "apostila de datas comemorativas"
        </p>

        {/* Guarantee section */}
        <div className="max-w-xl mx-auto border-t border-slate-100 pt-8 mb-8 text-center flex flex-col items-center">
          <img
            src={garantia7DiasImg}
            alt="7 Dias de Garantia Incondicional"
            className="w-full max-w-[380px] h-auto object-contain mb-4"
          />
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium max-w-lg mx-auto">
            Você tem 7 dias para testar todas as apostilas e atividades. Se não ficar totalmente satisfeito, devolvemos 100% do seu dinheiro investido. Risco zero.
          </p>
        </div>

        {/* Support section (WhatsApp) */}
        <div className="border-t border-slate-100 pt-6 text-center">
          <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            Dúvidas sobre a oferta? Fale com o suporte
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5548988782641&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Kit%20de%20Datas%20Comemorativas%2C%20mas%20estou%20com%20uma%20d%C3%BAvida%21"
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

      </div>
    </div>
  );
}