'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { GlassCard, SectionHeading } from '@/components/ui';

const testimonials = [
  {
    name: 'Carla Mendes',
    company: 'Lume Design',
    text: 'A Mttech elevou nossa presença online com um site muito mais profissional e estratégias que realmente geraram leads.'
  },
  {
    name: 'Rafael Costa',
    company: 'Orbix Tech',
    text: 'O trabalho em SEO e performance trouxe mais tráfego qualificado e melhorou significativamente nossas conversões.'
  },
  {
    name: 'Juliana Alves',
    company: 'Bloom Clinic',
    text: 'Equipe estratégica, criativa e muito comprometida com resultados. O projeto transmitiu autoridade desde o primeiro contato.'
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
