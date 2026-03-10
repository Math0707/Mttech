'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/10 transition-all duration-300',
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="#inicio" className="text-2xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-violet-400 bg-clip-text text-transparent">
            Mttech
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="#contato" className="rounded-full border border-violet-400/50 bg-violet-500/10 px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500/20">
            Solicitar Orçamento
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-200" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="#contato" className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-center font-medium text-white" onClick={() => setOpen(false)}>
              Solicitar Orçamento
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
