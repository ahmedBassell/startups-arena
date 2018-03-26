import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  apiUrl = '';

  constructor(private http: HttpClient) { }

  signup(name, email, phone, password) {
    return this.http.post(`${this.apiUrl}/users`, {
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
  }

  login(email, password) {
    return this.http.post(`${this.apiUrl}/users/login`, {
      email: email,
      password: password,
    });
  }

  setToken(token) {
    localStorage.setItem(`token`, token);
  }

  getToken() {
    return localStorage.getItem(`token`);
  }

  logout() {
    this.http.post(`${this.apiUrl}/users/logout`, {})
    .subscribe((response: any) => {
      localStorage.removeItem(`token`);
      localStorage.clear();
    });
  }
}
