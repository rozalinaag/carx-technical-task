import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { SignIn } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import logo from '../../public/favicon.ico';
import { StoreProvider } from '@/shared/providers/StoreProvider';
import { AuthProvider } from '@/shared/providers/AuthProvider';
import classNames from 'classnames';

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
        <AuthProvider>
          <body className={classNames(inter.className, 'min-w-[1200px]')}>
            <header className="pl-20 pr-20 flex justify-between items-center h-[70px] bg-black">
              <Link href="/tickets" className="w-[200px]">
                <Image width={150} height={20} src={logo.src} alt="logo" />
              </Link>

              <div className={'w-[200px] font-semibold text-lg'}>
                Техническое задание
              </div>

              <div className={'w-[200px] flex justify-end'}>
                <Link href="/login">
                  <SignIn size={32} />
                </Link>
              </div>
            </header>

            <div className="min-h-screen p-20">{children}</div>

            <footer className="text-center mb-10">
              Тестовое задание ©{new Date().getFullYear()} Розалина Агишева
            </footer>
          </body>
        </AuthProvider>
      </StoreProvider>
    </html>
  );
}
