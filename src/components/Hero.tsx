import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Loader2, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Hero() {
  const [formState, setFormState] = useState<'form' | 'loading' | 'success'>('form');
  const [error, setError] = useState<string | null>(null);
  const [phone, setPhone] = useState('');

  const WhatsAppGroupLink = "https://chat.whatsapp.com/HT75h98yltV0eybfav1GWH";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length > 2) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    }
    if (raw.length > 7) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted.slice(0, 15));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    setError(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const whatsapp = phone;

    try {
      const { error: supabaseError } = await supabase
        .from('subscribers')
        .insert([{ name, email, whatsapp }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          // Email already exists - show success state to let them join WhatsApp group
          setFormState('success');
          return;
        }
        throw new Error(supabaseError.message);
      }

      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      setFormState('success');
    } catch (err: any) {
      console.error('Erro na inscrição:', err);
      setError(err.message || 'Erro ao salvar inscrição. Verifique sua conexão e tente novamente.');
      setFormState('form');
    }
  };

  const handleScrollToForm = () => {
    const nameInput = document.getElementById('name-input');
    if (nameInput) {
      nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      nameInput.focus();
    }
  };

  return (
    <section className="pt-4 md:pt-6 pb-12 px-4 md:px-8 max-w-[1280px] mx-auto flex flex-col items-center">
      
      {/* Top Headline Section */}
      <div className="w-full max-w-4xl text-center space-y-3">
        {/* Pre-title */}
        <p className="text-[#212424] text-sm md:text-base lg:text-lg font-normal leading-snug">
          Você é Professor(a) do Ensino Fundamental ou Médio e está preocupado com a sua aposentadoria?
        </p>

        {/* Main Headline */}
        <h1 className="text-[#212424] text-xl md:text-2xl lg:text-[28px] font-extrabold leading-[1.3] max-w-3xl mx-auto tracking-tight">
          Em 1 hora, vou te mostrar os principais erros que fazem professores perderem tempo e dinheiro na hora de se aposentar e como evitar cada um deles.
        </h1>

        {/* Subheadline Description */}
        <p className="text-[#212424] text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
          Participe da nossa Reunião Fechada e Exclusiva no Google Meet e descubra como evitar erros comuns do INSS contra professores e proteger o seu futuro com um bom planejamento.
        </p>

        {/* Event Info Highlight */}
        <div className="pt-1">
          <p className="text-[#212424] font-extrabold text-sm md:text-base lg:text-lg tracking-wide">
            Evento Online e Gratuito | 08 de Outubro | 19h
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-[520px] mt-6">
        <div
          id="inscricao"
          className="bg-white border-2 border-forest rounded-[16px] p-5 md:p-7 shadow-md"
        >
          <AnimatePresence mode="wait">
            {formState === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs text-center font-medium">
                      {error}
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name-input" className="block text-xs font-bold text-[#333333] ml-1">
                      Name*
                    </label>
                    <input
                      required
                      id="name-input"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="email-input" className="block text-xs font-bold text-[#333333] ml-1">
                      Email*
                    </label>
                    <input
                      required
                      id="email-input"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  {/* WhatsApp Input */}
                  <div className="space-y-1">
                    <label htmlFor="whatsapp-input" className="block text-xs font-bold text-[#333333] ml-1">
                      Whatsapp*
                    </label>
                    <input
                      required
                      id="whatsapp-input"
                      type="tel"
                      name="whatsapp"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="form-input"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-forest hover:bg-forest-dark text-white font-extrabold py-3.5 px-6 rounded-[24px] uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md text-sm md:text-base text-center"
                    >
                      INSCREVA- SE
                    </button>
                  </div>
                </form>

                {/* Privacy Warning */}
                <p className="text-center text-[10px] md:text-xs text-[#777777] font-normal leading-normal pt-1">
                  Garantimos a total privacidade dos seus dados. Nunca compartilhamos suas informações.
                </p>
              </motion.div>
            )}

            {formState === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 space-y-4"
              >
                <Loader2 className="w-9 h-9 text-forest animate-spin" strokeWidth={2.5} />
                <p className="text-forest font-semibold text-sm">Garantindo sua vaga com segurança...</p>
              </motion.div>
            )}

            {formState === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center text-center py-2 space-y-5"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 border border-green-300 flex items-center justify-center shadow-sm">
                  <Check className="w-7 h-7 text-green-700" strokeWidth={3} />
                </div>
                <h3 className="text-2xl text-forest font-extrabold">
                  Inscrição Confirmada!
                </h3>
                <p className="text-xs md:text-sm text-[#444444] leading-relaxed max-w-sm">
                  Sua vaga está garantida para a Reunião Fechada no Google Meet! Clique no botão abaixo para entrar no Grupo VIP Exclusivo do WhatsApp e receber o link de acesso.
                </p>

                <a
                  href={WhatsAppGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold py-4 px-6 rounded-xl uppercase tracking-wider transition-all duration-200 block shadow-md text-sm md:text-base text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-6 h-6" fill="currentColor" />
                    ENTRAR NO GRUPO DO WHATSAPP
                  </span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Post-form Text & Big CTA */}
      <div className="w-full max-w-4xl text-center mt-8 space-y-3">
        <p className="text-[#212424] text-sm md:text-base font-normal">
          Por Drª Diná Neres - Especialista em Planejamento Previdenciário para Professores
        </p>

        <p className="text-[#212424] text-base md:text-xl font-bold tracking-tight">
          Não aceite trabalhar mais anos do que você deveria!
        </p>

        {/* Big Action CTA Button */}
        <div className="pt-4 flex justify-center w-full">
          <button
            onClick={handleScrollToForm}
            className="w-full max-w-[960px] bg-forest hover:bg-forest-dark text-white font-extrabold py-4 md:py-5 px-6 md:px-10 rounded-xl uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl text-lg md:text-2xl lg:text-[28px] leading-snug"
          >
            QUERO GARANTIR MINHA VAGA AGORA!
          </button>
        </div>
      </div>

    </section>
  );
}
