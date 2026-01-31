'use client';

export default function QuestionnairePage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 px-2">
            Let&apos;s build your routine
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 px-4">
            Questionnaire coming soon...
          </p>
          <a
            href="/"
            className="inline-block text-neutral-900 hover:text-neutral-700 underline text-sm sm:text-base min-h-[44px] flex items-center justify-center"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}

