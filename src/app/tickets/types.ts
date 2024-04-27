import { UserType } from "../login/type"

export type Ticket = {
  id: string,
  topic: string,
  message: string, 
  files?: string[],
  user: UserType,
  isClosed: boolean 
  dataOpen: Date
  dataClose?: Date
}