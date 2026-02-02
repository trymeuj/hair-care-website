'use client';

import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900">
            Your Hair Profile
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
            Results page coming soon...
          </p>
          <button
            onClick={() => router.push('/questionnaire')}
            className="inline-block text-neutral-900 hover:text-neutral-700 underline text-sm sm:text-base"
          >
            ← Back to questionnaire
          </button>
        </div>
      </div>
    </main>
  );
}

