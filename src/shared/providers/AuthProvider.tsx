'use client';
import { ReactNode, useEffect } from 'react';
import { useStores } from '../hooks/useStore';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();

  const {
    users: { currentUser },
  } = useStores();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [router, currentUser]);

  return <>{children}</>;
};
