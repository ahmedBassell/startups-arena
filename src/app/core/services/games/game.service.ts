import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {
  apiUrl = 'https://eg-football.herokuapp.com';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.apiUrl}/games`);
  }
}
