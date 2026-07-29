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
    <section className="py-16 md:py-24 bg-[#f6f7f8] border-t border-gray-200 overflow-hidden" id="autoridade">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Column (Left Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] text-forest font-extrabold tracking-tight text-center md:text-left">
              Dra Diná Neres
            </h2>

            {/* Paragraph with exact bold highlights from reference */}
            <div className="text-[#21303e] font-sans text-base md:text-lg lg:text-[21px] leading-[1.6] text-justify">
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
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[600px] shadow-lg rounded-sm overflow-hidden bg-gray-200">
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
