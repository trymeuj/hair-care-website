'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CTA() {
  const router = useRouter();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 px-2">
          Ready to simplify your hair care?
        </h2>
        
        <p className="text-base sm:text-lg text-neutral-600 px-4">
          Get clear, personalized guidance in the next 2 mins.
        </p>

        <button
          onClick={() => router.push('/questionnaire')}
          className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-neutral-800 transition-colors active:scale-95 min-h-[44px]"
        >
          Get started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

