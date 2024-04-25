import css from './styles.module.css';

type Props = {
  params: { id: string };
};

export default function TicketId({ params }: Props) {
  return <div className={css.wrapper}>fds {params.id}</div>;
}
