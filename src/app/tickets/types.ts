import { User } from "../login/type"

export type Ticket = {
  id: string,
  topic: string,
  message: string, 
  files?: Blob[],
  user: User
  isClosed: boolean 
}