import React, { Fragment } from 'react'
import Navigation from '../Navigation/Navigation'
import {ReactNode} from 'react';

interface ILayoutProps{
  children?: ReactNode,
  style?: string
}

export default function Layout({children, style} : ILayoutProps) {
  console.log(style);
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main className={`mx-auto max-w-[1536px] text-center ${style}`}>{children}</main>
    </Fragment>
  );
}
