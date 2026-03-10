'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Reveal({ children, y = 48 }: { children: React.ReactNode; y?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%'
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y]);

  return <div ref={ref}>{children}</div>;
}
