'use client';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
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
