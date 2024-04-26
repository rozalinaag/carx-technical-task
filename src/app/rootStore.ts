import ticketsStore from './tickets/store'
import commentsStore from './comments/store'

class RootStore {
  tickets = ticketsStore
  comments = commentsStore
}

export default RootStore;