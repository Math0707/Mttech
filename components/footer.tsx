import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">Mttech</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            Agência de marketing digital com foco em performance, presença online e crescimento sustentável.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Links rápidos</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link href="#servicos">Serviços</Link>
            <Link href="#sobre">Sobre</Link>
            <Link href="#projetos">Projetos</Link>
            <Link href="#contato">Contato</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Redes sociais</h4>
          <div className="mt-4 flex gap-4 text-sm text-slate-400">
            <Link href="https://instagram.com" target="_blank">Instagram</Link>
            <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
            <Link href="https://behance.net" target="_blank">Behance</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500 md:px-6">
        © {new Date().getFullYear()} Mttech. Todos os direitos reservados.
      </div>
    </footer>
  );
}
