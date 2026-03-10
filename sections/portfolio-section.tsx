'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/ui';

const projects = [
  { title: 'Ecom Pulse', category: 'SEO + CRO', description: 'Reposicionamento digital para e-commerce com foco em aquisição orgânica.' },
  { title: 'Nexa Studio', category: 'Website', description: 'Site institucional premium com performance otimizada e UX voltada à conversão.' },
  { title: 'FinGrow Ads', category: 'Marketing Digital', description: 'Campanhas integradas com aumento de leads qualificados e escala sustentável.' }
];

export function PortfolioSection() {
  return (
    <section id="projetos" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos pensados para destacar marcas no ambiente digital"
            description="Alguns exemplos conceituais do tipo de entrega que a Mttech pode construir para acelerar empresas ambiciosas."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} y={30 + index * 8}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-8 h-52 rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.35),transparent_35%),linear-gradient(135deg,rgba(15,23,42,1),rgba(8,47,73,0.9))]" />
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <ArrowUpRight className="text-slate-300 transition group-hover:text-white" />
                  </div>
                  <p className="mt-4 text-slate-400">{project.description}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
