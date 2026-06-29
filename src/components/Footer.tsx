import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 py-12 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#E4A107]" />
            <div className="text-left">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Segurança Norton</div>
              <div className="text-xs font-bold text-white">VERIFICADO 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <Lock className="w-6 h-6 text-[#22c55e]" />
            <div className="text-left">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Navegação Segura</div>
              <div className="text-xs font-bold text-white">GOOGLE SSL 256-BIT</div>
            </div>
          </div>
        </div>

        <p className="text-[#22c55e] text-lg font-extrabold tracking-widest mb-8 uppercase animate-pulse">
          🛡️ COMPRA 100% SEGURA E CRIPTOGRAFADA
        </p>

        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
          <span className="text-xl">🌱</span>
          <span className="font-fredoka font-bold text-lg tracking-tight text-white">
            Vida Sem Telas
          </span>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          O Kit Vida Sem Telas é um material digital de incentivo ao desenvolvimento infantil, autonomia e aprendizado lúdico através de atividades offline.
        </p>

        <div className="text-gray-500 text-xs border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Vida Sem Telas. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#comparativo" className="hover:text-gray-300 underline">Termos de Uso</a>
            <a href="#comparativo" className="hover:text-gray-300 underline">Políticas de Privacidade</a>
            <a href="#comparativo" className="hover:text-gray-300 underline">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
