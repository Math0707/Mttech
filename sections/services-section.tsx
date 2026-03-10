import { Code2, LineChart, SearchCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { GlassCard, SectionHeading } from '@/components/ui';

const services = [
  {
    icon: SearchCheck,
    title: 'SEO Avançado',
    items: ['Otimização técnica', 'Conteúdo estratégico', 'Aumento de tráfego orgânico']
  },
  {
    icon: Code2,
    title: 'Criação de Sites',
    items: ['Layout moderno', 'UX/UI otimizada', 'Sites rápidos e responsivos']
  },
  {
    icon: LineChart,
    title: 'Marketing Digital',
    items: ['Estratégias de crescimento', 'Funis de conversão', 'Gestão de campanhas']
  }
];

export function ServicesSection() {
  return (
    <section id="servicos" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Soluções digitais para crescer com consistência"
            description="Unimos estratégia, design e tecnologia para transformar tráfego em oportunidades reais de negócio."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <GlassCard className="group h-full transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/10">
                <service.icon className="text-cyan-300" size={30} />
                <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-400">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
