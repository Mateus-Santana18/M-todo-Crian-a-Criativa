import React from 'react';
import { CheckCircle, Mail, Sparkles, FileText, ArrowRight, Home } from 'lucide-react';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex flex-col justify-center items-center">
      {/* Success Animation Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#4C6FFF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg text-center relative z-10">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-200 text-green-500 shadow-sm">
          <CheckCircle className="w-12 h-12 stroke-[2.5]" />
        </div>

        <span className="inline-block bg-[#d5ffcf] text-[#15803d] text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider shadow-2xs">
          Compra Aprovada com Sucesso!
        </span>

        <h1 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
          Parabéns! Seu acesso foi <span className="text-[#22c55e]">enviado!</span>
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-8 font-medium">
          Obrigado por confiar no Método Criança Criativa. Você deu um passo maravilhoso para criar momentos incríveis de aprendizado e diversão em família longe das telas!
        </p>

        {/* How to Access Guide */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left mb-8 space-y-5">
          <h2 className="font-fredoka text-lg font-bold text-[#0F172A] flex items-center gap-2 mb-2 border-b border-slate-200/60 pb-2">
            <Sparkles className="w-5 h-5 text-amber-500" /> Como acessar seus materiais:
          </h2>

          {/* Step 1 */}
          <div className="flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#4C6FFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
              1
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#4C6FFF]" /> Verifique seu E-mail
              </h3>
              <p className="text-xs text-gray-500 font-semibold mt-0.5">
                Enviamos uma mensagem contendo os links de download para o endereço de e-mail cadastrado na hora da compra.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-full bg-[#4C6FFF] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
              2
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#4C6FFF]" /> Baixe e Imprima os PDFs
              </h3>
              <p className="text-xs text-gray-500 font-semibold mt-0.5">
                Os arquivos estão no formato PDF prontos para impressão. Você pode imprimir as fichas quantas vezes quiser em casa!
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3.5 border-t border-slate-200/60 pt-3">
            <span className="text-xs text-amber-600 font-bold bg-amber-50 border border-amber-200 rounded px-2.5 py-1">
              Dica: Se não encontrar o e-mail em 5 minutos, dê uma olhada nas suas pastas de Spam ou Promoções.
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-full transition shadow-md hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
          >
            <Home className="w-4 h-4" /> Voltar para a Página Inicial
          </a>
        </div>
      </div>
    </div>
  );
}
