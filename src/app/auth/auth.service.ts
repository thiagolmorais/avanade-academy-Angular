import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCnPhsK5M26qLhArBDp5bQF6EGs3GRkRm8', {email, password});

  }

  createAccount(email, password){
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCnPhsK5M26qLhArBDp5bQF6EGs3GRkRm8', {email, password});
  }

  setUser(user){
    this.pUser.next(user);
  }

  logout(){
    console.log('passou por aqui')
    this.setUser('');
  }
  
  verifyToken(token) {
    return this.httpClient.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCnPhsK5M26qLhArBDp5bQF6EGs3GRkRm8', {
      idToken: token
    });
  }
}
