'use client';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
import { useEffect } from 'react';
import { useStores } from '@/shared/hooks/useStore';
import { observer } from 'mobx-react-lite';
import Ticket from '@/shared/ui/Ticket/Ticket';
import FormTicket from './FormTicket/FormTicket';

const Tickets = observer(() => {
  const {
    tickets: { tickets, getTicketsAction, pushNewTicketAction },
  } = useStores();

  useEffect(() => {
    if (!tickets) {
      getTicketsAction();
    }
  }, [getTicketsAction, tickets]);

  return (
    <div>
      <BreadCrumbs />

      <FormTicket pushNewTicketAction={pushNewTicketAction} />

      <div className="flex flex-col gap-10">
        {tickets &&
          [...tickets]
            .reverse()
            .map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)}
      </div>
    </div>
  );
});

export default Tickets;
