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
    users: { currentUser, getUsers, getCurrentUser },
  } = useStores();

  useEffect(() => {
    getUsers();
    if (getCurrentUser() === null) {
      router.push('/login');
    }
  }, [router, currentUser, getUsers, getCurrentUser]);

  return <>{children}</>;
};
