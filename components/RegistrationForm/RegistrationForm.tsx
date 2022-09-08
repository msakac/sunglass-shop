import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../UI/Button';
import VectorEmail from '../Vector/VectorEmail';
import VectorStar from '../Vector/VectorStar';
import { GradientColors } from '../../common/types';
import SvgInput from '../UI/SvgInput';
import VectorRegister from '../Vector/VectorRegister';
import VectorUser from '../Vector/VectorUser';
import { ColorRing, MagnifyingGlass } from 'react-loader-spinner';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const vectorEmail = <VectorEmail className={style.inputVector} />;
  const vectorUser = <VectorUser className={style.inputVector} />;
  const vectorStar = <VectorStar className={style.inputVector} />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsRegistering(true);
    e.preventDefault();

    const user = {
      email,
      fullName,
      password,
      createdAt: new Date().getTime(),
    };

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    if(!data.success) {
      setError(data.message);
      setEmail('');
      setFullName('');
      setPassword('');
      setIsRegistering(false);
    } else{
      router.replace('/');
    }
  };

  return (
    <section className={style.section}>
      <VectorRegister className={style.vectorRegistration} />
      <div className={style.contentWrapper}>
        <h1 className={style.title}>Sign Up</h1>
       {error.length > 0 && <div className='flex items-center'>
          <MagnifyingGlass
            visible={true}
            height="30"
            width="30"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
          <p className="text-[#ff6584] text-[14px] font-semibold">{error}</p>
        </div>
      }

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
            {vectorEmail}
          </SvgInput>
          <SvgInput
            id="full-name"
            type="text"
            value={fullName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setFullName(e.currentTarget.value)}
            classes={style.inputStyle}
            inputProps={{
              name: 'full-name',
              placeholder: 'Full name',
              required: true,
            }}>
            {vectorUser}
          </SvgInput>
          <SvgInput
            id="email"
            type="password"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            classes={style.inputStyle}
            inputProps={{
              name: 'email',
              placeholder: 'Password',
              autoComplete: 'new-password',
              required: true,
            }}>
            {vectorStar}
          </SvgInput>
          <div className="mt-4">
            <div className="text-gray-400 text-xs font-semibold ">
              <p className="text-left">By signing up, you agree to our Terms & Conditions and Privacy Policy</p>
            </div>
          </div>
          {!isRegistering && (
            <Button
              title={'Continue'}
              withBorder={false}
              style={`w-[90%] rounded-full ${GradientColors.CYAN_TO_BLUE} hover:translate-y-[-2px] hover:shadow-2xl`}
            />
          )}
          {isRegistering && (
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
          <p className="text-sm text-gray-500 font-semibold">Already joined us?</p>
          <Link href="/login">
            <a className={style.linkLogin}>Login</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

const style = {
  section:
    'flex flex-col sm:flex-row items-center border dark:border-gray-600 rounded-2xl bg-gray-50 dark:bg-gray-800 mt-[12px] sm:mt-[100px] mx-5 p-2 sm:p-5',
  contentWrapper: 'w-[90%] h-[100%] m-auto my-6 flex flex-col sm:p-5 justify-center items-center gap-3 sm:w-[60%] lg:w-[40%]',
  vectorRegistration: 'w-[70%] h-[70%] basis-1/2',
  title: 'self-start text-3xl text-white font-bold border-b-2 w-full text-start pb-2 mb-2 sm:mb-6 border-cyan-500',
  inputVector:
    'w-[40px] h-[40px] fill-white self-end group-focus-within:fill-cyan-400 group-focus-within:animate-pulse group-focus-within:transition-colors',
  inputStyle:
    'w-[100%] bg-transparent ml-3 border-solid border-b-[1px] border-gray-500 text-white py-2 focus:outline-none focus:border-b-2 focus:border-cyan-500',
  linkForgotenPassword: 'text-gray-400 text-sm self-end font-semibold hover:border-b-[1px] hover:border-gray-400',
  linkLogin: 'text-sm text-cyan-400 font-semibold ml-1 hover:border-b-[1px] hover:border-cyan-400 hover:mt-[-1px]',
};
