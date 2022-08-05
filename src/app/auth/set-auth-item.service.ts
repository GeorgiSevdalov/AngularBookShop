import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetAuthItemService {

  constructor() { }

  currentUser(user:string){
    localStorage.setItem('userUid', user)
  }

  authToken(token:string){
    localStorage.setItem('token', token)
  }

  saveUserEmail(userEmail:string){
    localStorage.setItem('email', userEmail)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

}
