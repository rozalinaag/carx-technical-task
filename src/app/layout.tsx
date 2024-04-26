import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { SignIn } from '@phosphor-icons/react/dist/ssr';
import { SignOut } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import logo from '../../public/favicon.ico';
import { StoreProvider } from '@/shared/providers/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Техническое задание carX',
  description: 'Technical specification',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning={true}>
      <StoreProvider>
        <body className={inter.className}>
          <header className="pl-20 pr-20 flex justify-between items-center h-[70px] bg-black">
            <Link href="/tickets" className="w-[200px]">
              <Image width={150} height={20} src={logo.src} alt="logo" />
            </Link>

            <div className={'w-[200px] font-semibold text-lg'}>
              Техническое задание
            </div>

            <div className={'w-[200px] flex justify-end'}>
              <Link href="/login">
                {false ? <SignIn size={32} /> : <SignOut size={32} />}
              </Link>
            </div>
          </header>

          <div className="min-h-screen p-20">{children}</div>

          <footer className="text-center">
            Тестовое задание ©{new Date().getFullYear()} Розалина Агишева
          </footer>
        </body>
      </StoreProvider>
    </html>
  );
}
