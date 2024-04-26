import { makeAutoObservable } from "mobx";
import { initialTickets } from "@/app/tickets/data";
import { Ticket } from "./types";

class TicketsStore {
  tickets: Ticket[] | null = null;
  
  constructor() {
    makeAutoObservable(this)
  }

  getTicketsAction = () => {
    this.tickets = localStorage.tickets? JSON.parse( localStorage.tickets ) : initialTickets;
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
  }

  getOneTicket = (id: string) => {
    const tickets: Ticket[] = localStorage.tickets? JSON.parse( localStorage.tickets ) : initialTickets;
    const ticket = tickets.find(item => item.id === id)
    return ticket
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