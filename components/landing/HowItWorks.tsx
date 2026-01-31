import { MessageSquare, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Answer a few questions',
    description: 'Hair type, scalp condition, lifestyle, effort tolerance, budget.'
  },
  {
    icon: Sparkles,
    title: 'Get your routine',
    description: 'Clear, personalized guidance on what to use and when.'
  },
  {
    icon: CheckCircle,
    title: 'Follow it consistently',
    description: 'Simple enough to stick with. Effective enough to matter. Track your progress.'
  }
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24 bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium text-neutral-900 text-center mb-10 sm:mb-12 md:mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center space-y-3 sm:space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-900 text-white">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-neutral-900 px-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed px-4 sm:px-2">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

