'use client';
import { useStores } from '@/shared/hooks/useStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function CredentialsForm() {
  const router = useRouter();
  const {
    users: { signInUser },
  } = useStores();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = data.get('password');
    const email = data.get('email');

    if (password && email) {
      const signInAction = signInUser(email.toString(), password.toString());
      if (!signInAction) {
        setError('Ваш email или пароль неправильный!');
      } else {
        router.push('/tickets');
      }
    } else {
      setError('Введите пароль и логин');
    }
  };

  return (
    <form
      className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
      onSubmit={handleSubmit}
    >
      {error && (
        <span className="p-4 mb-2 text-lg font-semibold text-white bg-red-500 rounded-md">
          {error}
        </span>
      )}
      <input
        type="text"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-4 mb-4 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full h-12 px-6 mt-4 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
      >
        Войти
      </button>

      <Link className="link mt-5 text-center" href="/login/signUp">
        Зарегистрироваться
      </Link>
    </form>
  );
}
