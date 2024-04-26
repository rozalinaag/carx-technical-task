import { makeAutoObservable } from "mobx";
import { comments } from "./initialData";
import { CommentType } from "./types";

class CommentsStore {
  commentsByTicketId: CommentType[] | null = null;
  
  constructor() {
    makeAutoObservable(this)
  }

  getCommentsByIdTicket = (idTicket: number) => {
    this.commentsByTicketId = localStorage['comment' + idTicket]? JSON.parse( localStorage['comment' + idTicket] ) : 
    comments.find(item => item.idTicket === idTicket);
    return this.commentsByTicketId
  }

  deleteTicketAction = (id: number) => {
    // this.clients = deleteClients(keys, this.clients);
    // localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  pushNewTicketAction = (newTicket: CommentType) => {
    // const  newData = [...this.clients.filter(item => item.key !== newClient.key), newClient]
    // this.clients = newData;
    // localStorage.setItem('clients', JSON.stringify(newData));
  }
}

export default new CommentsStore();