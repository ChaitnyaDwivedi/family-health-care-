import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function NavButton({ icon: Icon, label, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-gray-700 hover:text-rose-600 transition-colors duration-200"
    >
      <Icon className="h-5 w-5" />
      <span className="ml-2">{label}</span>
    </button>
  );
}