import React, { ReactNode } from 'react';

interface ICardProps {
  children?: ReactNode;
}

export default function Card({ children }: ICardProps) {
  return (
    <div className="p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 mx-auto">
      {children}
    </div>
  );
}
