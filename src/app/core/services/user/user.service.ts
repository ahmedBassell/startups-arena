import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(userId: number) {
    return this.http.get(`http://localhost:3000/api/AppUsers/${userId}`);
  }

  patchUserById(userId: number, userData: {any}) {
    return this.http.patch(`http://localhost:3000/api/AppUsers/${userId}`, userData);
  }

  changeUserPassword(userPasswords: {any}) {
    return this.http.post(`http://localhost:3000/api/AppUsers/change-password`, userPasswords);
  }
}
