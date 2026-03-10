import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CTASection } from '@/sections/cta-section';
import { ContactSection } from '@/sections/contact-section';
import { HeroSection } from '@/sections/hero-section';
import { PortfolioSection } from '@/sections/portfolio-section';
import { ProcessSection } from '@/sections/process-section';
import { ReasonsSection } from '@/sections/reasons-section';
import { ServicesSection } from '@/sections/services-section';
import { TestimonialsSection } from '@/sections/testimonials-section';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-background text-white">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ReasonsSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
