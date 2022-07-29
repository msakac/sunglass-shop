import Link from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

interface IListItemProps {
  title: string;
  link: string;
  className?: string;
  props?: Record<string, string | number>;
}

export default function ListItem({ title, link, className, props }: IListItemProps) {
  return (
    <li>
      <Link href={link}>
        <a className={className} {...props}>
          {title}
        </a>
      </Link>
    </li>
  );
}
