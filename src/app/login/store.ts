import { makeAutoObservable } from "mobx";
import { UserType } from "./type";
import {users} from './defaultUsers'

class UserStore {
  users: UserType[] | null = null;
  currentUser: UserType | null = null;
  
  constructor() {
    makeAutoObservable(this)
  }

  getUsers = () => {
    this.users = localStorage.users? JSON.parse( localStorage.users ) : users;
    this.currentUser = localStorage.currentUser? JSON.parse( localStorage.currentUser ) : null;
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  }

  getCurrentUser = () => {
    this.currentUser = localStorage.currentUser? JSON.parse( localStorage.currentUser ) : null;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    return this.currentUser
  }

  signInUser = (email: string, password: string) => {
    const user = this.users?.find(item => item.email === email && item.password === password )
    if (user) {
      this.currentUser = user
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
      return true
    } else{
      return false
    }
  }

  logOutUser = () => {
    this.currentUser = null
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  }

  pushNewUser = (newUser: UserType) => {
    this.users = this.users ? [...this.users, newUser]: [newUser];
    this.currentUser = newUser,
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}

export default new UserStore();