'use client';
import BreadCrumbs from '@/shared/BreadCrumbs/BreadCrumbs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/tickets');
  }, [router]);

  return (
    <main className="">
      <BreadCrumbs />
    </main>
  );
}
