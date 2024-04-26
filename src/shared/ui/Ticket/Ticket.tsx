import { Ticket as TicketType } from '@/app/tickets/types';
import css from './Ticket.module.css';
import Field from '../Field/Field';
import Link from 'next/link';

type Props = {
  ticket: TicketType;
};

export default function Ticket({ ticket }: Props) {
  return (
    <Link href={'tickets/' + ticket.id} className="ticket">
      <Field name="Тема" color="blue">
        {ticket.topic}
      </Field>

      <Field name="Сообщение">{ticket.message}</Field>

      <Field name="Пользователь">{ticket.user.name}</Field>
    </Link>
  );
}
