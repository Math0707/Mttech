'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">{description}</p>
    </div>
  );
}

export function GlassCard({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

export function CTAButton({ href, children, secondary = false }: PropsWithChildren<{ href: string; secondary?: boolean ; target?: string }>) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition',
          secondary
            ? 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
            : 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-glow'
        )}
      >
        {children}
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
