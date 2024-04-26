import { User } from "../login/type"

export type Ticket = {
  id: number,
  topic: string,
  message: string, 
  files?: Blob[],
  user: User
}