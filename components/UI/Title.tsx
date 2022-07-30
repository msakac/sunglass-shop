import React from 'react';

interface ITitleProps {
  title: string;
  style?: string;
}

export default function Title({ title, style }: ITitleProps) {
  return <h1 className={`text-4xl dark:text-white my-[3vw] ${style}`}>{title}</h1>;
}
