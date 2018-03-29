import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameService } from '../services/games/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-match',
  templateUrl: './creat-match.component.html',
  styleUrls: ['./creat-match.component.scss']
})
export class CreatMatchComponent implements OnInit {
  gameForm;
  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit() {
    this.gameForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time_from: new FormControl('', [Validators.required]),
      time_to: new FormControl('', [Validators.required]),
      capacity: new FormControl(''),
      address: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.gameService.createGame(form.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/home']);
      });
  }

}
