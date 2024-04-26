import { Ticket as TicketType } from '@/app/tickets/types';
import css from './Ticket.module.css';
import Field from '../Field/Field';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  ticket: TicketType;
  link?: boolean;
};

export default function Ticket({ ticket, link = true }: Props) {
  const content = (
    <>
      <Field name="Тема" color="blue">
        {ticket.topic}
      </Field>

      <Field name="Пользователь">{ticket.user.name}</Field>

      <Field name="Сообщение" color="blue">
        {ticket.message}
      </Field>
    </>
  );

  if (link) {
    return (
      <Link href={'tickets/' + ticket.id} className="ticket">
        {content}

        <div
          className={classNames(
            css.status,
            ticket.isClosed ? css.closed : css.open
          )}
        >
          {ticket.isClosed ? 'Закрыто' : 'Открыто'}
        </div>
      </Link>
    );
  } else {
    return (
      <div className="ticket">
        {content}

        <div
          className={classNames(
            css.status,
            ticket.isClosed ? css.closed : css.open
          )}
        >
          {ticket.isClosed ? 'Закрыто' : 'Открыто'}
        </div>
      </div>
    );
  }
}
