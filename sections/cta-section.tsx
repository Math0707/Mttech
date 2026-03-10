import { Reveal } from '@/components/reveal';
import { CTAButton } from '@/components/ui';

export function CTASection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-violet-400/20 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.35),transparent_30%),linear-gradient(135deg,rgba(8,15,35,1),rgba(8,47,73,0.75))] px-6 py-12 text-center shadow-glow md:px-12 md:py-16">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Pronto para crescer?</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Pronto para crescer na internet?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Vamos construir uma presença digital forte, moderna e orientada a conversão para a sua empresa.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="#contato">Solicitar orçamento agora</CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
