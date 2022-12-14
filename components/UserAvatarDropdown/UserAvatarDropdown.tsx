import React, { Fragment } from 'react';
import Image from 'next/image';
import ListItem from '../ListItem/ListItem';

interface IUserAvatarDropdownProps {
  onClick: () => void;
  isOpen: boolean;
  profileDropdownItems: {
    key: string;
    title: string;
    link: string;
  }[];
}
/**
 *
 * @param param0 Components as props takes: onClick => callback function, 
 * isOpen => default dropdown value opened or closed, 
 * profileDropdownItems => items in dropdown menu (key, title, link)
 * @returns UserAvatarDropdown component
 */
export default function UserAvatarDropdown({ onClick, isOpen, profileDropdownItems }: IUserAvatarDropdownProps) {
  return (
    <Fragment>
      <button
        type="button"
        onClick={onClick}
        className={style.button}
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <Image width={48} height={48} className="rounded-full" src="/avatar.jpg" alt="user photo" />
      </button>
      <div
        className={style.dropdown__container(isOpen)}
        id="user-dropdown"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="bottom">
        <div className="py-3 px-4">
          <span className={style.name}>Hardo Kodiran</span>
          <span className={style.email}>hardkod@gmail.com</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          {profileDropdownItems.map((item) => (
            <ListItem key={item.key} title={item.title} className={style.listItem} link={item.link} />
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

const style = {
  button: 'flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600',
  dropdown__container: (isOpen: boolean) => {
    return `${isOpen ? '' : 'hidden'} absolute z-50 m-0 text-base list-none bg-white rounded divide-y 
      divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block 
      translate-y-[82px] top-0 right-auto bottom-auto left-auto ml-[-120px]`;
  },
  name: 'block text-sm text-gray-900 dark:text-white',
  email: 'block text-sm font-medium text-gray-500 truncate dark:text-gray-400',
  listItem: 'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
};
