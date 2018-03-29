import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/games/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games;
  isAuthenticated;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.isAuthenticated = true;
    this.games = [
      {
        time_from: '06:00 PM',
        time_to: '08:00 PM',
        place: '104 Gamaet El Dewal El Arabeya St., MOHANDESEEN, Giza Governorate',
        location: '(1,2)',
        capacity: 15,
        players_joined: 7
      },
      {
        time_from: '07:00 PM',
        time_to: '09:00 PM',
        place: '104 Gamaet El Dewal El Arabeya St., MOHANDESEEN, Giza Governorate',
        location: '(1,2)',
        capacity: 15,
        players_joined: 8
      },
      {
        time_from: '08:00 PM',
        time_to: '10:00 PM',
        place: '104 Gamaet El Dewal El Arabeya St., MOHANDESEEN, Giza Governorate',
        location: '(1,2)',
        capacity: 15,
        players_joined: 9
      },
    ]

    this.gameService.getGames()
      .subscribe(data => {
        console.log(data);
      });
  }

  joinGame(game) {
    game.players_joined ++;
    game.is_disabled = true;
  }

}
