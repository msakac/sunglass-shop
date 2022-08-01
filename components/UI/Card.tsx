import React, { ReactNode } from 'react';

interface ICardProps {
  children?: ReactNode;
  style?: string;
}

export default function Card({ children, style }: ICardProps) {
  return (
    <div
      className={`p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 mx-auto ${style}`}>
      {children}
    </div>
  );
}
