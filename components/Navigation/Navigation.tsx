import Image from 'next/image';
import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem';
import UserAvatarDropdown from '../UserAvatarDropdown/UserAvatarDropdown';
export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);

  const navClickHandler = () => {
    profileIsOpen && setProfileIsOpen(false);
    setNavIsOpen((value) => !value);
  };
  const profileClickHandler = () => {
    navIsOpen && setNavIsOpen(false);
    setProfileIsOpen((value) => !value);
  };

  const profileDropdownItems = [
    {
      key: '1',
      title: 'Dashboard',
      link: '/'
    },
    {
      key: '2',
      title: 'Settings',
      link: '/'
    },
    {
      key: '3',
      title: 'Earnings',
      link: '/'
    },
    {
      key: '4',
      title: 'Sign Out',
      link: '/'
    }
  ];

  const navigationDropdownItems = [
    {
      key: '1n',
      title: 'Home',
      link: '/'
    },
    {
      key: '2n',
      title: 'About',
      link: '/'
    },
    {
      key: '3n',
      title: 'Services',
      link: '/'
    },
    {
      key: '4n',
      title: 'Glasses',
      link: '/admin'
    },
    {
      key: '5n',
      title: 'Login',
      link: '/'
    }
  ];

  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" width={36} height={36} />
          <span className={style.logo}>Gleseso</span>
        </a>
        <div className="flex items-center md:order-2">
          <UserAvatarDropdown onClick={profileClickHandler} isOpen={profileIsOpen} profileDropdownItems={profileDropdownItems} />
          <button
            onClick={navClickHandler}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className={style.button}
            aria-controls="mobile-menu-2"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
        <div className={style.list__container(navIsOpen)}>
          <ul className={style.ul}>
            {navigationDropdownItems.map((item) => (
              <ListItem key={item.key} title={item.title} className={style.listItem_unactive} link={item.link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const style = {
  nav: 'bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800',
  wrapper:
    'container flex flex-wrap justify-between items-center mx-auto',
  logo: 'self-center text-2xl ml-3 font-semibold whitespace-nowrap dark:text-white',
  button: `inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`,
  list__container: (navIsOpen: boolean) =>
    `${
      navIsOpen ? '' : 'hidden'
    } justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2`,
  ul: ` flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 
  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium 
  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700`,
  listItem_unactive: ` font-semibold block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400
  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`,
  listItem_active: `font-semibold block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white`
};
