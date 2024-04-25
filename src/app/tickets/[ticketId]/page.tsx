import BreadCrumbs from '@/shared/BreadCrumbs/BreadCrumbs';
import css from './styles.module.css';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export default function TicketId({ params }: Props) {
  return (
    <div className={css.wrapper}>
      <BreadCrumbs>История запроса</BreadCrumbs>
    </div>
  );
}
