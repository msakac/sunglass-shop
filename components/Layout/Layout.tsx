import React, { Fragment } from 'react'
import Navigation from '../Navigation/Navigation'
import {ReactNode} from 'react';

interface ILayoutProps{
  children?: ReactNode
}

export default function Layout({children} : ILayoutProps) {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main>
        {children}
      </main>
    </Fragment>
  );
}
