import ticketsStore from './tickets/store'
import commentsStore from './comments/store'
import usersStore from './login/store'

class RootStore {
  tickets = ticketsStore
  comments = commentsStore
  users = usersStore
}

export default RootStore;