import { User } from "../login/type"

export type Ticket = {
  id: string,
  topic: string,
  message: string, 
  files?: string[],
  user: User
  isClosed: boolean 
  dataOpen: Date
  dataClose?: Date
}