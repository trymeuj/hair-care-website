'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HairDrip from './HairDrip';
import Beard from './Beard';

const hairIcons = [
  '/man-hair_358259.png',
  '/man-hair_358272.png',
  '/man-hair_358274.png',
  '/man-hair_358301.png',
  '/man-hair_358304.png',
];

export default function Hero() {
  const router = useRouter();
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const handleIconClick = () => {
    setCurrentIconIndex((prev) => (prev + 1) % hairIcons.length);
  };

  return (
    <section className="relative min-h-screen flex items-center px-4 py-8 sm:px-6 sm:py-12 md:py-16 max-w-4xl mx-auto overflow-hidden">
      <HairDrip />
      <Beard />
      <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-900 leading-tight">
          Your personalized haircare routine<br />
          <span className="text-neutral-600">in 2 minutes</span>
        </h1>

        <div className="flex justify-center py-4 sm:py-6 md:py-8">
          <button
            onClick={handleIconClick}
            className="cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 p-4 sm:p-6 md:p-8 rounded-2xl bg-neutral-50 border-2 border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-md"
            aria-label="View different hair styles"
          >
            <Image
              src={hairIcons[currentIconIndex]}
              alt="Hair style icon"
              width={200}
              height={200}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
            />
          </button>
        </div>

        <button
          onClick={() => router.push('/questionnaire')}
          className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-neutral-800 transition-colors active:scale-95 min-h-[44px]"
        >
          Get your routine
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed px-2">
          Answer a few questions. Get a clear, personalized routine.
        </p>
      </div>
    </section>
  );
}

