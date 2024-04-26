import { makeAutoObservable } from "mobx";
import { initialTickets } from "@/app/tickets/data";
import { Ticket } from "./types";

class TicketsStore {
  tickets: Ticket[] = localStorage.tickets? JSON.parse( localStorage.tickets ) : initialTickets;
  
  constructor() {
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
    makeAutoObservable(this)
  }

  deleteTicketAction = (id: number) => {
    // this.clients = deleteClients(keys, this.clients);
    // localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  pushNewTicketAction = (newTicket: Ticket) => {
    // const  newData = [...this.clients.filter(item => item.key !== newClient.key), newClient]
    // this.clients = newData;
    // localStorage.setItem('clients', JSON.stringify(newData));
  }
}

export default new TicketsStore();