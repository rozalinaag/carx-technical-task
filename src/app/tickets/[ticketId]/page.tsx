'use client';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
import css from './styles.module.css';
import { useEffect, useState } from 'react';
import { useStores } from '@/shared/hooks/useStore';
import { Ticket as TicketType } from '../types';
import Ticket from '@/shared/ui/Ticket/Ticket';

type Props = {
  params: { ticketId: string };
};

export default function TicketId({ params }: Props) {
  const [ticket, setTicket] = useState<TicketType>();
  const {
    tickets: { getOneTicket },
  } = useStores();

  useEffect(() => {
    setTicket(getOneTicket(parseInt(params.ticketId)));

    console.log(getOneTicket(parseInt(params.ticketId)));
  }, [getOneTicket, params.ticketId]);

  return (
    <div className={css.wrapper}>
      <BreadCrumbs>История запроса</BreadCrumbs>

      {!ticket && <div>Loading...</div>}

      {ticket && <Ticket ticket={ticket} />}
    </div>
  );
}
