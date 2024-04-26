import { User } from "../login/type"

export type CommentType = {
  id: string,
  idTicket: string,
  user: User
  text: string,
  data: Date,
}