'use client';

import { motion } from 'framer-motion';
import { BarChart3, Bot, Sparkles } from 'lucide-react';
import { CTAButton, GlassCard } from '@/components/ui';

const floatingCards = [
  { icon: Bot, label: 'Automação', value: '+145%' },
  { icon: Sparkles, label: 'Engajamento', value: '+92%' },
  { icon: BarChart3, label: 'Conversão', value: '+68%' }
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200"
          >
            Agência digital orientada a performance
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          >
            Transformamos sua presença digital em <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">resultados reais</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            SEO, design moderno e estratégias digitais para fazer sua empresa crescer online.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <CTAButton href="#contato">Solicitar orçamento</CTAButton>
            <CTAButton href="#contato" secondary>
              Falar com especialista
            </CTAButton>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-violet-500/20 blur-3xl md:block"
          />
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-10 hidden h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl md:block"
          />

          <GlassCard className="relative overflow-hidden border-violet-400/20 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.25),transparent_40%)]" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">Campanhas otimizadas</p>
                <p className="mt-3 text-4xl font-semibold text-white">24/7</p>
                <p className="mt-3 text-sm text-slate-400">Monitoramento de tráfego, palavras-chave e funis de conversão.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">SEO técnico</p>
                <div className="mt-4 h-32 rounded-2xl bg-gradient-to-br from-violet-500/30 via-transparent to-cyan-500/30 p-4">
                  <div className="flex h-full items-end gap-2">
                    {[38, 52, 64, 80, 92].map((h) => (
                      <div key={h} className="w-full rounded-t-full bg-gradient-to-t from-violet-500 to-cyan-400" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 grid gap-4 md:grid-cols-3">
                {floatingCards.map((item) => (
                  <motion.div key={item.label} whileHover={{ y: -5 }} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                    <item.icon className="text-cyan-300" size={22} />
                    <p className="mt-4 text-sm text-slate-400">{item.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
