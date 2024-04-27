'use client';
import { useRouter } from 'next/navigation';
import { CredentialsForm } from './credentialsForm';
import { useStores } from '@/shared/hooks/useStore';
import { useEffect } from 'react';

export default function SignInPage() {
  const router = useRouter();

  const {
    users: { currentUser, logOutUser },
  } = useStores();

  useEffect(() => {
    if (currentUser) {
      logOutUser();
    }
  }, [router, currentUser, logOutUser]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 ">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md border-solid border-2 border-gray-600 rounded-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Войти</h1>
        <CredentialsForm />
      </div>
    </div>
  );
}
