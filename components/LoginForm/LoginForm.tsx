import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';
import VectorEnvelope from '../Vector/VectorEnvelope';
import VectorLogin from '../Vector/VectorLogin';
import VectorText from '../Vector/VectorText';
import { GradientColors } from '../../common/types';

export default function LoginForm() {
  return (
    <section className="w-[80%] h-[100%] m-auto my-6 border dark:border-gray-600 rounded-2xl flex flex-col p-5 justify-center items-center gap-3 bg-gray-50 dark:bg-gray-800 md:w-[60%] lg:w-[40%]">
      <VectorLogin className="w-[100%] h-[100%] my-[-100px] max-w-[500px]" />
      <h1 className="self-start text-4xl text-white font-bold border-b-2 w-full text-start pb-2 mb-6 border-cyan-500">Login</h1>
      <form className="flex flex-col gap-4 self-stretch">
        <div className="flex gap-3">
          <VectorEnvelope className="w-[30px] h-[30px] fill-white self-end" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            className="w-[100%] bg-transparent ml-3 border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-cyan-500 focus:animate-pulse transition-colors"
          />
        </div>
        <div className="flex gap-3 self-stretch">
          <VectorText className="w-[30px] h-[30px] fill-white self-end" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Password"
            className="w-[100%] ml-3 bg-transparent border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-cyan-500 focus:animate-pulse transition-colors"
          />
        </div>
      </form>
      <div className="mt-4 flex justify-between w-full">
        <div className="text-white">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="mx-2 text-gray-400 font-semibold">
            Remember me
          </label>
        </div>
        <Link href="/">
          <a className="text-gray-400 text-sm self-end font-semibold hover:border-b-[1px] hover:border-gray-400">Forgot Password?</a>
        </Link>
      </div>
      <Button
        title={'Login'}
        withBorder={false}
        style={`w-full ${GradientColors.CYAN_TO_BLUE} hover:outline hover:outline-offset-2 hover:outline-1`}
      />
    </section>
  );
}
