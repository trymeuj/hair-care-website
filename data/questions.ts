import React from 'react';
import { 
  Waves, 
  Droplets, 
  Calendar, 
  AlertCircle, 
  Cloud, 
  Sparkles, 
  Zap, 
  Target,
  Minus,
  HelpCircle,
  CheckCircle,
  XCircle,
  Wind,
  Sun,
  Activity,
  Scissors,
  Heart,
  Shield,
  Circle,
  Gauge,
  Timer,
  Clock,
  FlaskConical,
  Package,
  Layers,
  Snowflake,
  Flame,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { 
  TallyOne, 
  TallyTwo, 
  TallyThree, 
  TallyFour, 
  ShampooBottles, 
  MultipleProducts 
} from '@/components/questionnaire/CustomIcons';

export interface QuestionOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 'texture',
    question: 'How would you describe your hair\'s natural texture (without styling)?',
    options: [
      {
        id: 'straight',
        label: 'Straight',
        icon: Minus,
      },
      {
        id: 'slightly-wavy',
        label: 'Slightly wavy',
        icon: Waves,
      },
      {
        id: 'curly',
        label: 'Curly',
        icon: Circle, // Different from wavy
      },
      {
        id: 'not-sure',
        label: 'Not sure',
        icon: HelpCircle,
      },
    ],
  },
  {
    id: 'scalp-feel',
    question: 'By the end of a normal day, how does your scalp usually feel?',
    options: [
      {
        id: 'oily',
        label: 'Oily / greasy',
        icon: Droplets,
      },
      {
        id: 'dry-itchy',
        label: 'Dry or itchy',
        icon: AlertCircle,
      },
      {
        id: 'balanced',
        label: 'Balanced (neither oily nor dry)',
        icon: Shield,
      },
      {
        id: 'not-sure-scalp',
        label: 'Not sure',
        icon: HelpCircle,
      },
    ],
  },
  {
    id: 'priority',
    question: 'What matters most to you right now?',
    options: [
      {
        id: 'reduce-hairfall',
        label: 'Reducing hair fall / thinning',
        icon: Heart,
      },
      {
        id: 'reduce-dandruff',
        label: 'Reducing dandruff or itch',
        icon: Shield,
      },
      {
        id: 'better-texture',
        label: 'Better texture / manageability',
        icon: Sparkles,
      },
      {
        id: 'keep-simple',
        label: 'Keeping things simple and clean',
        icon: CheckCircle,
      },
    ],
  },
  {
    id: 'wash-frequency',
    question: 'How often do you usually wash your hair?',
    options: [
      {
        id: 'daily',
        label: 'Daily',
        icon: TallyFour,
      },
      {
        id: 'every-2-days',
        label: 'Every 2 days',
        icon: TallyThree,
      },
      {
        id: '2-3-times-week',
        label: '2–3 times a week',
        icon: TallyTwo,
      },
      {
        id: 'once-week-less',
        label: 'Once a week or less',
        icon: TallyOne,
      },
    ],
  },
  {
    id: 'flakes-itching',
    question: 'Do you notice flakes or itching on your scalp?',
    options: [
      {
        id: 'often',
        label: 'Often',
        icon: Snowflake, // Flakes
      },
      {
        id: 'sometimes',
        label: 'Sometimes',
        icon: Activity, // Occasional
      },
      {
        id: 'rarely',
        label: 'Rarely',
        icon: CheckCircle, // Rare
      },
      {
        id: 'never',
        label: 'Never',
        icon: XCircle,
      },
    ],
  },
  {
    id: 'humid-behavior',
    question: 'On humid or sweaty days, your hair mostly:',
    options: [
      {
        id: 'frizzy-puffy',
        label: 'Gets frizzy and puffy',
        icon: Wind,
      },
      {
        id: 'flat-oily',
        label: 'Gets flat or oily',
        icon: Droplets,
      },
      {
        id: 'mostly-same',
        label: 'Looks mostly the same',
        icon: Sun,
      },
      {
        id: 'not-sure-humid',
        label: 'Not sure',
        icon: HelpCircle,
      },
    ],
  },
  {
    id: 'current-routine',
    question: 'Which best describes your current hair routine?',
    options: [
      {
        id: 'almost-nothing',
        label: 'I do almost nothing',
        icon: Minus,
      },
      {
        id: 'shampoo-only',
        label: 'Shampoo only',
        icon: ShampooBottles,
      },
      {
        id: 'shampoo-oil',
        label: 'Shampoo + oil sometimes',
        icon: Package, // Product package
      },
      {
        id: 'multiple-steps',
        label: 'Multiple steps (more than 2 things)',
        icon: MultipleProducts,
      },
    ],
  },
  {
    id: 'effort-willingness',
    question: 'What kind of routine feels realistic for you?',
    options: [
      {
        id: 'minimal',
        label: 'Keep it simple',
        icon: Gauge, // Low on gauge
      },
      {
        id: 'moderate',
        label: 'A few consistent steps',
        icon: Timer, // Moderate time
      },
      {
        id: 'high',
        label: 'I don\'t mind more steps',
        icon: Clock, // More time
      },
      {
        id: 'flexible',
        label: 'Depends on what works',
        icon: TrendingUp, // Results-oriented
      },
    ],
  },
];

export type Answers = Record<string, string>;

