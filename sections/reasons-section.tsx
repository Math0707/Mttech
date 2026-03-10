'use client';

import { motion } from 'framer-motion';
import { Gauge, LayoutDashboard, Rocket, TrendingUp } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { GlassCard, SectionHeading } from '@/components/ui';

const reasons = [
  { icon: TrendingUp, title: 'Estratégias focadas em crescimento' },
  { icon: LayoutDashboard, title: 'Design moderno e profissional' },
  { icon: Gauge, title: 'Performance e SEO avançado' },
  { icon: Rocket, title: 'Experiência em marketing digital' }
];

const counters = [
  { value: '+100', label: 'projetos' },
  { value: '+50', label: 'clientes' },
  { value: '+300%', label: 'crescimento médio' }
];

export function ReasonsSection() {
  return (
    <section id="sobre" className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Por que escolher a Mttech"
              title="Tecnologia, criatividade e estratégia no mesmo time"
              description="Criamos experiências digitais com foco em conversão, autoridade e posicionamento online duradouro."
            />
          </div>
        </Reveal>

        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} y={28 + index * 8}>
                <GlassCard className="h-full">
                  <reason.icon className="text-violet-300" size={24} />
                  <h3 className="mt-4 text-xl font-semibold text-white">{reason.title}</h3>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <GlassCard className="grid gap-6 md:grid-cols-3">
            {counters.map((counter, index) => (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <p className="text-4xl font-semibold text-white md:text-5xl">{counter.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{counter.label}</p>
              </motion.div>
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
