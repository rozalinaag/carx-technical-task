import { makeAutoObservable } from "mobx";
import { comments } from "./initialData";
import { CommentType } from "./types";

class CommentsStore {
  commentsByTicketId: CommentType[] | null = null;
  
  constructor() {
    makeAutoObservable(this)
  }

  getCommentsByIdTicket = (idTicket: number) => {
    this.commentsByTicketId = localStorage['comment' + idTicket]? JSON.parse( localStorage['comment' + idTicket] ) : comments.filter(item => item.idTicket === idTicket) || null;
    localStorage.setItem('comment' + idTicket, JSON.stringify(this.commentsByTicketId));
    return this.commentsByTicketId

  }

  deleteTicketAction = (idTicket: number, idComment: number) => {
    // this.clients = deleteClients(keys, this.clients);
    // localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  pushNewTicketAction = (idTicket: number, newTicket: CommentType) => {
    // const  newData = [...this.clients.filter(item => item.key !== newClient.key), newClient]
    // this.clients = newData;
    // localStorage.setItem('clients', JSON.stringify(newData));
  }
}

export default new CommentsStore();