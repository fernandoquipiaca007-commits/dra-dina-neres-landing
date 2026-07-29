import { motion } from 'motion/react';
import fotoImg from '../assets/foto.jpeg';

export function Authority() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-[#f9faf9] border-t border-gray-100 overflow-hidden" id="autoridade">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Text Column (Left Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="lg:col-span-7 space-y-6 order-2 lg:order-1 lg:pr-4"
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] text-forest font-extrabold tracking-tight">
              Dra Diná Neres
            </h2>

            {/* Paragraph with bold highlights matching image */}
            <div className="space-y-4 text-[#212424] font-sans text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left">
              <p>
                <strong className="font-bold text-[#111111]">Dra. Dina Neres</strong> é <strong className="font-bold text-[#111111]">advogada com 7 anos</strong> de experiência no direito previdenciário, focada em ajudar segurados a garantir <strong className="font-bold text-[#111111]">seus direitos no INSS</strong>. Ela se especializa em <strong className="font-bold text-[#111111]">benefícios e planejamentos</strong> previdenciários, oferecendo soluções personalizadas. Atenta às mudanças na Previdência Social, orienta <strong className="font-bold text-[#111111]">professores</strong> em suas aposentadorias para <strong className="font-bold text-[#111111]">evitar perdas financeiras e erros</strong>. Seu trabalho inclui planejamento previdenciário estratégico, tornando informações complexas acessíveis e ajudando professores a tomarem <strong className="font-bold text-[#111111]">decisões conscientes para um futuro seguro e digno</strong>.
              </p>
            </div>
          </motion.div>

          {/* Photo Column (Right Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[480px] shadow-lg rounded-sm overflow-hidden bg-gray-100">
              <img
                src={fotoImg}
                alt="Dra Diná Neres"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
