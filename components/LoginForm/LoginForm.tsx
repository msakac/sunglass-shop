import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';
import VectorEmail from '../Vector/VectorEmail';
import VectorLogin from '../Vector/VectorLogin';
import VectorStar from '../Vector/VectorStar';
import { GradientColors } from '../../common/types';
import SvgInput from '../UI/SvgInput';

export default function LoginForm() {
  const vectorEmail = <VectorEmail className={style.inputVector} />;
  const vectorStar = <VectorStar className={style.inputVector} />;

  return (
    <section className={style.section}>
      <VectorLogin className={style.vectorLogin} />
      <div className={style.contentWrapper}>
        <h1 className={style.title}>Login</h1>
        <form className="flex flex-col gap-4 self-stretch" autoComplete="off">
          <SvgInput
            id="email"
            type="email"
            classes={style.inputStyle}
            inputProps={{
              name: 'email',
              autoComplete: 'new-password',
              placeholder: 'E-mail',
            }}>
            {vectorEmail}
          </SvgInput>
          <SvgInput
            id="email"
            type="password"
            classes={style.inputStyle}
            inputProps={{
              name: 'email',
              placeholder: 'Password',
              autoComplete: 'new-password',
            }}
          >{vectorStar}</SvgInput>
        </form>
        <div className="mt-4 flex justify-between w-full">
          <div className="text-white">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="mx-2 text-gray-400 font-semibold text-sm">
              Remember me
            </label>
          </div>
          <Link href="/">
            <a className={style.linkForgotenPassword}>Forgot Password?</a>
          </Link>
        </div>
        <Button
          title={'Login'}
          withBorder={false}
          style={`w-[90%] rounded-full ${GradientColors.CYAN_TO_BLUE} hover:translate-y-[-2px] hover:shadow-2xl`}
        />
        <p className="or-login">OR</p>
        <div className="flex">
          <p className="text-sm text-gray-500 font-semibold">New to Gleseso?</p>
          <Link href="/registration">
            <a className={style.linkRegister}>Register</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

const style = {
  section:
    'flex flex-col sm:flex-row items-center border dark:border-gray-600 rounded-2xl bg-gray-50 dark:bg-gray-800 mt-[100px] mx-5 p-5 sm:p-5',
  contentWrapper: 'w-[90%] h-[100%] m-auto my-6 flex flex-col sm:p-5 justify-center items-center gap-3 sm:w-[60%] lg:w-[40%]',
  vectorLogin: 'w-[70%] h-[70%] basis-1/2',
  title: 'self-start text-3xl text-white font-bold border-b-2 w-full text-start pb-2 mb-2 sm:mb-6 border-cyan-500',
  inputVector:
    'w-[40px] h-[40px] fill-white self-end group-focus-within:fill-cyan-400 group-focus-within:animate-pulse group-focus-within:transition-colors',
  inputStyle:
    'w-[100%] bg-transparent ml-3 border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-cyan-500',
  linkForgotenPassword: 'text-gray-400 text-sm self-end font-semibold hover:border-b-[1px] hover:border-gray-400',
  linkRegister: 'text-sm text-cyan-400 font-semibold ml-1 hover:border-b-[1px] hover:border-cyan-400 hover:mt-[-1px]',
};
