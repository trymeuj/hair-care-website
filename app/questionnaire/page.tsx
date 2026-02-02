'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, type Answers } from '@/data/questions';
import QuestionView from '@/components/questionnaire/QuestionView';

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion.id] || null;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleSelect = (answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      // Store answers in localStorage and navigate to results
      const finalAnswers = {
        ...answers,
        [currentQuestion.id]: selectedAnswer,
      };
      localStorage.setItem('hairCareAnswers', JSON.stringify(finalAnswers));
      router.push('/results');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-6 sm:px-6 sm:py-8 md:py-12 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <QuestionView
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelect={handleSelect}
          onNext={handleNext}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
      </div>
    </main>
  );
}

