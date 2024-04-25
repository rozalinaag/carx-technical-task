import Link from 'next/link';
import css from './BreadCrumbs.module.css';

type Props = {
  children?: React.ReactNode;
};

export default function BreadCrumbs({ children }: Props) {
  return (
    <div className={css.wrapper}>
      <Link href="/tickets">Главная</Link>
      {children && <div>{children}</div>}
    </div>
  );
}
