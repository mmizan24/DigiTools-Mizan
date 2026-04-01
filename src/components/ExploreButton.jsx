import { ArrowRight } from 'lucide-react';

export function ExploreButton({ onClick, label = 'Explore Products' }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-dim shadow-xl shadow-primary/20"
    >
      {label}
      <ArrowRight className="ml-2 w-5 h-5" />
    </button>
  );
}
