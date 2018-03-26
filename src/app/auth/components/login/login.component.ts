import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { LookupsService } from '../../../core/services/lookups/lookups.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private authService: AuthService,
    private lookupsService: LookupsService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('')
    });
  }

  // we should use user interface as value type
  onSubmit(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password)
      .subscribe((userData: {id: string, ttl: number, userId: number}) => {
        this.authService.setToken(userData.id);
        this.lookupsService.setAuth(userData);
        this.lookupsService.saveAuth(userData);
        this.router.navigate(['/dashboard']);
      });
  }
}
