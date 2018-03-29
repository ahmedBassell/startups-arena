import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  apiUrl = 'https://eg-football.herokuapp.com';

  constructor(private http: HttpClient) { }

  signup(name, email, phone, password) {
    return this.http.post(`${this.apiUrl}/users`, {
      user: {
        name: name,
        email: email,
        phone: phone,
        password: password,
        password_confirmation: password,
      }
    });
  }

  login(email, password) {
    return this.http.post<any>(`${this.apiUrl}/users/sign_in`, {
      user: {
        email: email,
        password: password,
      }
    }, { observe: 'response' });
  }

  setToken(token) {
    localStorage.setItem(`token`, token);
  }

  getToken() {
    return localStorage.getItem(`token`);
  }

  logout() {
    this.http.delete(`${this.apiUrl}/users/sign_out`)
    .subscribe((response: any) => {
      localStorage.removeItem(`token`);
      localStorage.clear();
    });
  }
}
