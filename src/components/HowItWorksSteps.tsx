import React from 'react';
import { Download, Printer, Play } from 'lucide-react';

export default function HowItWorksSteps() {
  return (
    <section id="sec-como-funciona" data-section="Como Funciona" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#0F172A] tracking-tight">
          Como <span className="text-[#4C6FFF]">funciona?</span>
        </h2>

        <div className="space-y-8 max-w-2xl mx-auto">
          {/* Step 1 */}
          <div className="relative border-[3px] border-dashed border-[#C7D2FE] bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 pl-16 sm:pl-24 hover:border-[#4C6FFF] transition duration-300">
            <div className="absolute -top-4 left-6 w-9 h-9 bg-[#4C6FFF] text-white rounded-full flex items-center justify-center text-base font-extrabold shadow-md">
              1
            </div>
            <div className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#C7D2FE]/50 rounded-2xl flex items-center justify-center text-[#4C6FFF]">
                <Download className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl font-bold mb-2 text-[#0F172A]">
              Faça o download
            </h3>
            <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
              Após a confirmação segura do pagamento de R$ 7,00, você receberá instantaneamente um e-mail com o link de acesso para baixar todos os materiais ou visualizar online.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative border-[3px] border-dashed border-[#C7D2FE] bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 pl-16 sm:pl-24 hover:border-[#4C6FFF] transition duration-300">
            <div className="absolute -top-4 left-6 w-9 h-9 bg-[#4C6FFF] text-white rounded-full flex items-center justify-center text-base font-extrabold shadow-md">
              2
            </div>
            <div className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#C7D2FE]/50 rounded-2xl flex items-center justify-center text-[#4C6FFF]">
                <Printer className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl font-bold mb-2 text-[#0F172A]">
              Imprima ou leia no celular
            </h3>
            <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
              Você pode imprimir em casa, na escola ou em qualquer gráfica em papel A4 normal. Mas lembrando: muitas das brincadeiras lúdicas podem ser aplicadas apenas lendo o guia rápido no celular!
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative border-[3px] border-dashed border-[#C7D2FE] bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 pl-16 sm:pl-24 hover:border-[#4C6FFF] transition duration-300">
            <div className="absolute -top-4 left-6 w-9 h-9 bg-[#4C6FFF] text-white rounded-full flex items-center justify-center text-base font-extrabold shadow-md">
              3
            </div>
            <div className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#C7D2FE]/50 rounded-2xl flex items-center justify-center text-[#4C6FFF]">
                <Play className="w-6 h-6" />
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl font-bold mb-2 text-[#0F172A]">
              Comece a praticar hoje
            </h3>
            <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
              Com as sugestões em mãos, a criança já pode começar a se divertir. Sugerimos dedicar de 15 a 20 minutos por dia para criar novos hábitos cognitivos saudáveis longe do Wi-Fi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
