'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { GlassCard, SectionHeading } from '@/components/ui';

const testimonials = [
 {
  name: 'Grimald',
  company: 'Chaveiro Griamald',
  text: 'Depois que a Mttech fez nosso site, a diferença foi nítida. Ficou muito mais profissional e começamos a receber bem mais contatos de clientes.'
},
{
  name: 'Rafaela Costa',
  company: 'Danielle Reumatologia',
  text: 'O trabalho de SEO realmente deu resultado. Hoje recebemos mais visitas de pessoas certas, e isso aumentou bastante nossas vendas.'
},
{
  name: 'Dr Ottavio',
  company: 'Otavio Ortopedista',
  text: 'Desde o início senti que estava lidando com uma equipe séria. O projeto ficou lindo e transmite muita confiança para quem acessa.'
}
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que nossos clientes diriam sobre a experiência"
            description="Prova social é essencial para conversão. Aqui estão exemplos fictícios alinhados ao posicionamento da Mttech."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} y={28 + index * 8}>
              <motion.div whileHover={{ y: -6 }}>
                <GlassCard className="h-full">
                  <Quote className="text-violet-300" size={28} />
                  <p className="mt-5 leading-7 text-slate-300">“{testimonial.text}”</p>
                  <div className="mt-8">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </GlassCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
