'use client';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
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
    <div>
      <BreadCrumbs />

      <div className="flex flex-col gap-10">
        {tickets?.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
});

export default Tickets;
