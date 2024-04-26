'use client';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
import css from './styles.module.css';
import { useEffect } from 'react';
import { useStores } from '@/shared/hooks/useStore';
import { observer } from 'mobx-react-lite';
import Ticket from '@/shared/ui/Ticket/Ticket';

const Tickets = observer(() => {
  const {
    tickets: { tickets, getTicketsAction },
  } = useStores();

  useEffect(() => {
    if (!tickets) {
      getTicketsAction();
    }
  }, [getTicketsAction, tickets]);

  console.log(tickets);

  return (
    <div className={css.wrapper}>
      <BreadCrumbs />

      {tickets?.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
});

export default Tickets;
