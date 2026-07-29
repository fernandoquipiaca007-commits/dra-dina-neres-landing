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
    <section className="py-16 md:py-24 bg-[#f4f5f4] border-t border-gray-200 overflow-hidden" id="autoridade">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-forest font-extrabold tracking-tight text-center md:text-left">
              Dra Diná Neres
            </h2>

            {/* Paragraph with bold highlights */}
            <div className="text-[#1a1a1a] font-sans text-base md:text-lg lg:text-xl leading-[1.9] text-justify">
              <p>
                <strong className="font-bold">Dra. Dina Neres</strong> é <strong className="font-bold">advogada com 7 anos</strong> de experiência no direito previdenciário, focada em ajudar segurados a garantir <strong className="font-bold">seus direitos no INSS</strong>. Ela se especializa em <strong className="font-bold">benefícios</strong> e <strong className="font-bold">planejamentos</strong> previdenciários, oferecendo soluções personalizadas. Atenta às mudanças na Previdência Social, orienta <strong className="font-bold">professores</strong> em suas aposentadorias para <strong className="font-bold">evitar perdas financeiras e erros.</strong> Seu trabalho inclui planejamento previdenciário estratégico, tornando informações complexas acessíveis e ajudando professores a tomarem <strong className="font-bold">decisões conscientes para um futuro seguro e digno.</strong>
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
            <div className="w-full max-w-[560px] shadow-xl overflow-hidden bg-gray-200">
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
