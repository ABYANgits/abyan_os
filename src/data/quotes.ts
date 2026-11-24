export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
}

export const SYSTEM_QUOTES: QuoteItem[] = [
  {
    id: 'quote-1',
    quote: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci',
  },
  {
    id: 'quote-2',
    quote: 'Code is like humor. When you have to explain it, it is bad.',
    author: 'Cory House',
  },
  {
    id: 'quote-3',
    quote: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson',
  },
  {
    id: 'quote-4',
    quote: 'Make it work, make it right, make it fast.',
    author: 'Kent Beck',
  },
  {
    id: 'quote-5',
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
  },
];
