'use client';

import { QuestionOption } from '@/data/questions';

interface QuestionCardProps {
  option: QuestionOption;
  isSelected: boolean;
  onSelect: () => void;
}

export default function QuestionCard({ option, isSelected, onSelect }: QuestionCardProps) {
  const Icon = option.icon;
  const iconColorClass = isSelected ? 'text-white' : 'text-neutral-600';

  return (
    <button
      onClick={onSelect}
      className={`
        relative flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl
        border-2 transition-all duration-200 active:scale-95 min-h-[100px] sm:min-h-[120px]
        ${isSelected 
          ? 'border-neutral-900 bg-neutral-50 shadow-md' 
          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
        }
      `}
    >
      <div className={`
        flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full
        ${isSelected ? 'bg-neutral-900' : 'bg-neutral-100'}
        transition-colors
      `}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColorClass}`} />
      </div>
      <span className={`
        text-sm sm:text-base font-medium text-center leading-tight px-1
        ${isSelected ? 'text-neutral-900' : 'text-neutral-700'}
      `}>
        {option.label}
      </span>
    </button>
  );
}

