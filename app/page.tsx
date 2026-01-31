import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import CTA from '@/components/landing/CTA';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Hero />
      <HowItWorks />
      <CTA />
    </main>
  );
}

