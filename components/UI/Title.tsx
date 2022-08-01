import React from 'react';

interface ITitleProps {
  title: string;
  style?: string;
}

export default function Title({ title, style }: ITitleProps) {
  return <h1 className={` dark:text-white ${style}`}>{title}</h1>;
}
