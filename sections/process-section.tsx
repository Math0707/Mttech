import { Reveal } from '@/components/reveal';
import { GlassCard, SectionHeading } from '@/components/ui';

const steps = [
  'Análise',
  'Estratégia',
  'Desenvolvimento',
  'Crescimento'
];

export function ProcessSection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Processo"
            title="Um fluxo claro para acelerar resultados"
            description="Cada etapa foi estruturada para reduzir ruído, ganhar velocidade e direcionar sua empresa para o crescimento digital."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="absolute left-10 right-10 top-8 hidden h-px bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 md:block" />
          {steps.map((step, index) => (
            <Reveal key={step} y={32 + index * 8}>
              <GlassCard className="relative h-full text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-xl font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{step}</h3>
                <p className="mt-3 text-slate-400">
                  {step === 'Análise' && 'Diagnóstico de cenário, concorrência, funil e oportunidades.'}
                  {step === 'Estratégia' && 'Plano de ação com prioridades, canais e metas de crescimento.'}
                  {step === 'Desenvolvimento' && 'Execução criativa e técnica com foco em performance.'}
                  {step === 'Crescimento' && 'Otimizações contínuas para escala e previsibilidade.'}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
