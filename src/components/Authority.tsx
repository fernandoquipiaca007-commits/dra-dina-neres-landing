import { motion } from 'motion/react';
import fotoImg from '../assets/foto.jpeg';

export function Authority() {
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-white px-4 md:px-8 border-t border-gray-100" id="autoridade">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Text Column (Left Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="md:col-span-7 space-y-6 order-2 md:order-1"
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl text-forest font-extrabold tracking-tight">
              Dra Diná Neres
            </h2>

            {/* Paragraph with bold highlights matching image */}
            <div className="space-y-4 text-[#222222] font-sans text-sm md:text-base leading-relaxed text-justify md:text-left">
              <p>
                <strong className="font-bold">Dra. Dina Neres</strong> é <strong className="font-bold">advogada com 7 anos</strong> de experiência no direito previdenciário, focada em ajudar segurados a garantir <strong className="font-bold">seus direitos no INSS</strong>. Ela se especializa em <strong className="font-bold">benefícios e planejamentos</strong> previdenciários, oferecendo soluções personalizadas. Atenta às mudanças na Previdência Social, orienta <strong className="font-bold">professores</strong> em suas aposentadorias para <strong className="font-bold">evitar perdas financeiras e erros</strong>. Seu trabalho inclui planejamento previdenciário estratégico, tornando informações complexas acessíveis e ajudando professores a tomarem <strong className="font-bold">decisões conscientes para um futuro seguro e digno</strong>.
              </p>
            </div>
          </motion.div>

          {/* Photo Column (Right Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariant}
            className="md:col-span-5 flex justify-center order-1 md:order-2"
          >
            <div className="w-full max-w-[400px] overflow-hidden shadow-xl rounded-lg border border-gray-100">
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
