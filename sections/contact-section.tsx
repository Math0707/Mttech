'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/reveal';
import { GlassCard, SectionHeading } from '@/components/ui';

export function ContactSection() {
  return (
    <section id="contato" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar sobre o próximo projeto da sua marca"
            description="Preencha o formulário e dê o primeiro passo para uma presença digital mais forte, estratégica e lucrativa."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <GlassCard className="h-full">
              <h3 className="text-2xl font-semibold text-white">Mttech</h3>
              <p className="mt-4 leading-7 text-slate-400">
                Estratégia digital, SEO, sites de alta performance e campanhas com foco em crescimento real.
              </p>
              <div className="mt-8 space-y-4 text-slate-300">
                <p>contatomttech@gmail.com</p>
                <p>(11) 91756-2462</p>
                <p>São Paulo, Brasil</p>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal>
            <GlassCard>
              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input label="Nome" type="text" placeholder="Seu nome" />
                  <Input label="Email" type="email" placeholder="voce@empresa.com" />
                </div>
                <Input label="Empresa" type="text" placeholder="Nome da empresa" />
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Mensagem</label>
                  <textarea
                    placeholder="Conte um pouco sobre o projeto"
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                  />
                </div>
                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-glow"
                >
                  Enviar mensagem
                </motion.button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Input({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
      />
    </div>
  );
}
