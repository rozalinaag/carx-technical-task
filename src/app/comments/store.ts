import { makeAutoObservable } from "mobx";
import { comments } from "./initialData";
import { CommentType } from "./types";

class CommentsStore {
  commentsByTicketId: CommentType[] | null = null;
  
  constructor() {
    makeAutoObservable(this)
  }

  getCommentsByIdTicket = (idTicket: string) => {
    this.commentsByTicketId = localStorage['comment' + idTicket]? JSON.parse( localStorage['comment' + idTicket] ) : comments.filter(item => item.idTicket === idTicket) || null;
    localStorage.setItem('comment' + idTicket, JSON.stringify(this.commentsByTicketId));
    return this.commentsByTicketId
  }

  pushNewCommentAction = (idTicket: string, newComment: CommentType) => {
    this.commentsByTicketId = this.commentsByTicketId ? [...this.commentsByTicketId, newComment]: [newComment];
    localStorage.setItem('comment' + idTicket, JSON.stringify(this.commentsByTicketId));
  }
}

export default new CommentsStore();