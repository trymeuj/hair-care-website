'use client';

import { Question } from '@/data/questions';
import QuestionCard from './QuestionCard';

interface QuestionViewProps {
  question: Question;
  selectedAnswer: string | null;
  onSelect: (answerId: string) => void;
  onNext: () => void;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuestionView({
  question,
  selectedAnswer,
  onSelect,
  onNext,
  currentQuestion,
  totalQuestions,
}: QuestionViewProps) {
  return (
    <div className="w-full flex flex-col items-center space-y-6 sm:space-y-8 max-w-lg mx-auto">
      {/* Progress indicator */}
      <div className="w-full space-y-2">
        <div className="flex justify-between text-xs sm:text-sm text-neutral-500">
          <span>Question {currentQuestion} of {totalQuestions}</span>
          <span>{Math.round((currentQuestion / totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-neutral-900 transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question - centered */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900 leading-tight text-center px-2">
        {question.question}
      </h2>

      {/* Options grid - 2x2 - centered for thumb reach */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
        {question.options.map((option) => (
          <QuestionCard
            key={option.id}
            option={option}
            isSelected={selectedAnswer === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>

      {/* Next button - centered, thumb-friendly position */}
      <div className="w-full pt-2">
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className={`
            w-full py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-medium
            transition-all duration-200 min-h-[44px]
            ${selectedAnswer
              ? 'bg-neutral-900 text-white hover:bg-neutral-800 active:scale-95'
              : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }
          `}
        >
          {currentQuestion === totalQuestions ? 'See Results' : 'Next'}
        </button>
      </div>
    </div>
  );
}

