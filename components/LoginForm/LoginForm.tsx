import Link from 'next/link';
import React from 'react';
import Button from '../UI/Button';
import VectorEnvelope from '../Vector/VectorEnvelope';
import VectorLogin from '../Vector/VectorLogin';
import VectorText from '../Vector/VectorText';

export default function LoginForm() {
  return (
    <section className="w-[80%] h-[100%] m-auto flex flex-col justify-center items-center gap-3 bg-gray-50 dark:bg-gray-900">
      <VectorLogin className="w-[100%] h-[100%] my-[-200px]" />
      <h1 className="self-start text-4xl text-white font-bold border-b-2 w-full text-start py-2 border-[#4ecebe]">Login</h1>
      <form className="flex flex-col gap-4 self-start w-full">
        <div className="flex gap-3 items-center">
          <VectorEnvelope className="w-[30px] h-[30px] fill-white self-end" />
          <div className="ml-3">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              className="bg-transparent border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-[#4ecebe] focus:animate-pulse transition-colors"
            />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <VectorText className="w-[30px] h-[30px] fill-white self-end" />
          <div className="ml-3">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Password"
              className="bg-transparent border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-[#4ecebe] focus:animate-pulse transition-colors"
            />
          </div>
        </div>
      </form>
      <div className="mt-4 flex justify-between w-full">
        <div className="text-white">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className='mx-2 text-gray-400 font-semibold'>Remember me</label>
        </div>
        <Link href="/">
          <a className="text-gray-400 text-sm self-end font-semibold hover:border-b-[1px] hover:border-gray-400">Forgot Password?</a>
        </Link>
      </div>
      <Button
        title={'Login'}
        withBorder={false}
        style={'w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:outline hover:outline-offset-2 hover:outline-1'}
      />
    </section>
  );
}
