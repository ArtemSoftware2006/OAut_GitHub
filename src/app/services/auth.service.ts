import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  public login() {
    window.open('http://localhost:5032/api/auth/login');
  }
  public getInfo() {
    return this.httpClient.get('http://localhost:5032/api/auth/info');
  }
}
