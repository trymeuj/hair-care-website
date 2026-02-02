'use client';

import React from 'react';

// Custom icon components for questionnaire options

export const TallyOne: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col gap-0.5 ${className}`}>
    <div className="w-0.5 h-4 bg-current"></div>
  </div>
);

export const TallyTwo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col gap-0.5 ${className}`}>
    <div className="w-0.5 h-4 bg-current"></div>
    <div className="w-0.5 h-4 bg-current"></div>
  </div>
);

export const TallyThree: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col gap-0.5 ${className}`}>
    <div className="w-0.5 h-4 bg-current"></div>
    <div className="w-0.5 h-4 bg-current"></div>
    <div className="w-0.5 h-4 bg-current"></div>
  </div>
);

export const TallyFour: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col gap-0.5 ${className}`}>
    <div className="w-0.5 h-4 bg-current"></div>
    <div className="w-0.5 h-4 bg-current"></div>
    <div className="w-0.5 h-4 bg-current"></div>
    <div className="w-0.5 h-4 bg-current"></div>
  </div>
);

export const ShampooBottles: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex gap-1 ${className}`}>
    <div className="w-3 h-6 border-2 border-current rounded-sm"></div>
    <div className="w-3 h-6 border-2 border-current rounded-sm"></div>
  </div>
);

export const MultipleProducts: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex gap-1 ${className}`}>
    <div className="w-3 h-6 border-2 border-current rounded-sm"></div>
    <div className="w-3 h-6 border-2 border-current rounded-sm"></div>
    <div className="w-3 h-6 border-2 border-current rounded-sm"></div>
  </div>
);

