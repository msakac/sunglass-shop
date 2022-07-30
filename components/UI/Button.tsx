import React, { ReactElement } from 'react';

interface IButtonProps {
  title: string;
  onClick?: () => void;
  style?: string;
  withBorder?: boolean;
}

export default function Button({ title, onClick, style, withBorder = true }: IButtonProps) {
  return (
    <button className={`my-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${style}`}>
      <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 ${withBorder && "bg-white dark:bg-gray-900"} rounded-md group-hover:bg-opacity-0 text-md text-lg font-semibold`}>
        {title}
      </span>
    </button>
  );
}
