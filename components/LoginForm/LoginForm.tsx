import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../UI/Button';
import VectorEmail from '../Vector/VectorEmail';
import VectorLogin from '../Vector/VectorLogin';
import VectorStar from '../Vector/VectorStar';
import { GradientColors } from '../../common/types';
import SvgInput from '../UI/SvgInput';
import { ColorRing } from 'react-loader-spinner';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogging, setIsLogging] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLogging(true);
    e.preventDefault();
    console.log(email);
  };

  return (
    <section className={style.section}>
      <VectorLogin className={style.vectorLogin} />
      <div className={style.contentWrapper}>
        <h1 className={style.title}>Login</h1>
        <form className="flex flex-col gap-4 self-stretch" autoComplete="off" onSubmit={handleSubmit}>
          <SvgInput
            id="email"
            type="email"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
            classes={style.inputStyle}
            inputProps={{
              name: 'email',
              autoComplete: 'new-password',
              placeholder: 'E-mail',
              required: true,
            }}>
            <VectorEmail className={style.inputVector} />
          </SvgInput>
          <SvgInput
            id="password"
            type="password"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            classes={style.inputStyle}
            inputProps={{
              name: 'password',
              placeholder: 'Password',
              autoComplete: 'new-password',
              required: true,
            }}>
            <VectorStar className={style.inputVector} />
          </SvgInput>
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
          {!isLogging && (
            <Button
              title={'Login'}
              withBorder={false}
              style={`w-[90%] rounded-full ${GradientColors.CYAN_TO_BLUE} hover:translate-y-[-2px] hover:shadow-2xl self-center`}
            />
          )}
          {isLogging && (
            <div className="self-center">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#8229de', '#a51ff0', '#ff6584', '#72ecf6', '#20d4f6']}
              />
            </div>
          )}
        </form>
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
  section: 'flex flex-col sm:flex-row items-center border dark:border-gray-600 rounded-2xl bg-gray-50 dark:bg-gray-800 m-5 p-2 sm:p-5',
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
