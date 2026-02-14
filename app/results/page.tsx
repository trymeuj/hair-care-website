'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function ResultsPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle phone number submission here
    console.log('Phone number:', phoneNumber);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 sm:p-10 md:p-12">
          {!submitted ? (
            <>
              <div className="text-center space-y-4 mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
                  Your report is ready.
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600">
                  Get your detailed breakdown on WhatsApp.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="flex-1 px-5 py-4 rounded-xl bg-neutral-100 border-2 border-neutral-200 focus:border-neutral-900 focus:bg-white focus:outline-none text-base text-neutral-900 placeholder:text-neutral-500 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-neutral-800 transition-all active:scale-95 whitespace-nowrap min-h-[56px]"
                  >
                    Get report
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4 py-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
                Thanks!
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600">
                We'll send your report to WhatsApp shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}


