import { Ticket as TicketType } from '@/app/tickets/types';
import css from './Ticket.module.css';
import Field from '../Field/Field';
import Link from 'next/link';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Image from 'next/image';

type Props = {
  ticket: TicketType;
  link?: boolean;
};

export default function Ticket({ ticket, link = true }: Props) {
  const content = (
    <>
      <Field name="Тема" color="red">
        {ticket.topic}
      </Field>

      <Field name="Пользователь">{ticket.user.name}</Field>
      <Field name="Создано">
        {dayjs(ticket.dataOpen).format('DD MMMM YYYY')}
      </Field>

      <Field name="Сообщение" color="blue">
        {ticket.message}
      </Field>

      {ticket.files && (
        <div className={css.files}>
          {ticket.files.map((item, index) => (
            <Image
              key={index}
              unoptimized
              width={100}
              height={100}
              src={item}
              alt="picture"
            />
          ))}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link href={'tickets/' + ticket.id} className="ticket ticketHover">
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
