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
                <span className="text-2xl">📩</span>
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl font-bold mb-2 text-[#0F172A]">
              Receba seu acesso na hora
            </h3>
            <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
              Após a confirmação do pagamento, você recebe instantaneamente o acesso completo por e-mail para baixar ou visualizar todos os materiais.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative border-[3px] border-dashed border-[#C7D2FE] bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 pl-16 sm:pl-24 hover:border-[#4C6FFF] transition duration-300">
            <div className="absolute -top-4 left-6 w-9 h-9 bg-[#4C6FFF] text-white rounded-full flex items-center justify-center text-base font-extrabold shadow-md">
              2
            </div>
            <div className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#C7D2FE]/50 rounded-2xl flex items-center justify-center text-[#4C6FFF]">
                <span className="text-2xl">🖨️</span>
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl font-bold mb-2 text-[#0F172A]">
              Imprima e prepare a diversão
            </h3>
            <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
              Imprima as atividades em casa ou em qualquer gráfica e tenha tudo pronto em poucos minutos.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative border-[3px] border-dashed border-[#C7D2FE] bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 pl-16 sm:pl-24 hover:border-[#4C6FFF] transition duration-300">
            <div className="absolute -top-4 left-6 w-9 h-9 bg-[#4C6FFF] text-white rounded-full flex items-center justify-center text-base font-extrabold shadow-md">
              3
            </div>
            <div className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#C7D2FE]/50 rounded-2xl flex items-center justify-center text-[#4C6FFF]">
                <span className="text-2xl">🎲</span>
              </div>
            </div>
            <h3 className="font-fredoka text-xl sm:text-2xl font-bold mb-2 text-[#0F172A]">
              Comece a brincar hoje mesmo
            </h3>
            <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
              Em apenas 15 minutos por dia, seu filho já pode trocar o tempo de tela por brincadeiras que divertem, ensinam e estimulam o desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
