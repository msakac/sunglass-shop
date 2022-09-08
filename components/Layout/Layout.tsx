import React, { Fragment, useRef } from 'react'
import Navigation from '../Navigation/Navigation'
import {ReactNode} from 'react';

interface ILayoutProps{
  children?: ReactNode,
  style?: string,
  
}

interface NavigationRef {
  clickedOutside: () => void;
}

export default function Layout({children, style} : ILayoutProps) {

  const navRef = useRef<NavigationRef>(null);

  const onClickedOutside = () => {
    if(navRef.current){
      navRef.current.clickedOutside();
    }
  }

  return (
    <Fragment>
      <header>
        <Navigation ref={navRef} />
      </header>
      <main className={`mx-auto text-center ${style}`} onClick={onClickedOutside}>
        {children}
      </main>
    </Fragment>
  );
}
