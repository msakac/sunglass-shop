import React from 'react';



interface IListItemProps {
  title: string;
  link?: string;
  className?: string;
  props?: Record<string, string | number>
}

export default function ListItem({ title, link, className, props }: IListItemProps) {
  return (
    <li>
      <a href={link} className={className} {...props}>
        {title}
      </a>
    </li>
  );
}

