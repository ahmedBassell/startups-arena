import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      password: new FormControl('')
    });
  }

  // we should use user interface as value type
  onSubmit(form: FormGroup) {
    console.log(form.value);
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const phone = form.value.phone;

    this.authService.signup(name, email, phone, password)
      .subscribe(data => {
        this.router.navigate(['/login']);
        console.log(data);
      });
  }

}
