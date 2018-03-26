import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      password: new FormControl('')
    });
  }

  // we should use user interface as value type
  onSubmit(form: FormGroup) {
    const email = form.value.email;
    const password = form.value.password;
    const phone = form.value.phone;
    const name = form.value.phone;

    this.authService.signup(name, email, phone, password)
      .subscribe(data => {
        console.log(data);
      });
  }

}
