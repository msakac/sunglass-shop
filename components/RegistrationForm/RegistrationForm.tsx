import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';
import VectorEmail from '../Vector/VectorEmail';
import VectorStar from '../Vector/VectorStar';
import { GradientColors } from '../../common/types';
import SvgInput from '../UI/SvgInput';
import VectorRegister from '../Vector/VectorRegister';
import VectorUser from '../Vector/VectorUser';

export default function LoginForm() {
  const vectorEmail = <VectorEmail className={style.inputVector} />;
  const vectorUser = <VectorUser className={style.inputVector} />;
  const vectorStar = <VectorStar className={style.inputVector} />;

  return (
    <section className="flex flex-col md:flex-row items-center border dark:border-gray-600 rounded-2xl bg-gray-50 dark:bg-gray-800 mt-[12px] md:mt-[100px] mx-5 p-2 md:p-5">
      <VectorRegister className={style.vectorRegistration} />
      <div className={style.wrapper}>
        <h1 className={style.title}>Sign Up</h1>
        <form className="flex flex-col gap-4 self-stretch" autoComplete="off">
          <SvgInput
            children={vectorEmail}
            id="email"
            type="email"
            classes={style.inputStyle}
            inputProps={{
              name: 'email',
              autoComplete: 'new-password',
              placeholder: 'E-mail'
            }}
          />
          <SvgInput
            children={vectorUser}
            id="full-name"
            type="text"
            classes={style.inputStyle}
            inputProps={{
              name: 'full-name',
              placeholder: 'Full name'
            }}
          />
          <SvgInput
            children={vectorStar}
            id="email"
            type="password"
            classes={style.inputStyle}
            inputProps={{
              name: 'email',
              placeholder: 'Password',
              autoComplete: 'new-password'
            }}
          />
        </form>
        <div className="mt-4">
          <div className="text-gray-400 text-xs font-semibold ">
            <p className='text-left'>By signing up, you agree to our Terms & Conditions and Privacy Policy</p>
          </div>
        </div>
        <Button
          title={'Continue'}
          withBorder={false}
          style={`w-[90%] rounded-full ${GradientColors.CYAN_TO_BLUE} hover:translate-y-[-2px] hover:shadow-2xl`}
        />
        <p className="or-login">OR</p>
        <div className="flex">
          <p className="text-sm text-gray-500 font-semibold">Already joined us?</p>
          <Link href="/">
            <a className={style.linkLogin}>Login</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

const style = {
  wrapper:
    'w-[90%] h-[100%] m-auto my-6 flex flex-col md:p-5 justify-center items-center gap-3 md:w-[60%] lg:w-[40%]',
  vectorRegistration: 'w-[70%] h-[70%] basis-1/2',
  title: 'self-start text-3xl text-white font-bold border-b-2 w-full text-start pb-2 mb-2 md:mb-6 border-cyan-500',
  inputVector:
    'w-[40px] h-[40px] fill-white self-end group-focus-within:fill-cyan-400 group-focus-within:animate-pulse group-focus-within:transition-colors',
  inputStyle:
    'w-[100%] bg-transparent ml-3 border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-cyan-500',
  linkForgotenPassword: 'text-gray-400 text-sm self-end font-semibold hover:border-b-[1px] hover:border-gray-400',
  linkLogin: 'text-sm text-cyan-400 font-semibold ml-1 hover:border-b-[1px] hover:border-cyan-400 hover:mt-[-1px]'
};
