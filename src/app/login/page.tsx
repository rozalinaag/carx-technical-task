import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { CredentialsForm } from './credentialsForm';
import { nextAuthConfig } from '@/entities/session/next-auth-config';

export default async function SignInPage() {
  const session = await getServerSession(nextAuthConfig);

  console.log('Session: ', session);

  if (session) return redirect('/timeline');

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Войти</h1>
        <CredentialsForm />
      </div>
    </div>
  );
}
