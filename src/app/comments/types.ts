import { UserType } from "../login/type"

export type CommentType = {
  id: string,
  idTicket: string,
  user: UserType
  text: string,
  data: Date,
}