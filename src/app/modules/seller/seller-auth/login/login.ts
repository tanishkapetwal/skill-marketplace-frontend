import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../seller/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginData = {
    'email': '',
    'password': ''
  }

  signupData = {
    'name': '',
    'email': '',
    'password': '',
    'phone': '',
    'bio':''
  }
  isLogin = true;
  toggle() {

    this.isLogin = !this.isLogin;
  }
  constructor(private authService: AuthService, private router:Router) { }
  onLogin(form: any) {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Login succesful:', res);

        localStorage.setItem('token', res.token)
        console.log(localStorage.getItem('token'));
        this.router.navigateByUrl('teacher-dashboard')
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }

  onSignup(form: any) {
    this.authService.signUp(this.signupData).subscribe({
      next: (res) => {
        console.log('Signup succesful:', res);
        if(res && res.token){
          localStorage.setItem('token', res.token)
        }

        // localStorage.setItem('token', res.token)
        this.router.navigateByUrl('teacher-dashboard')
      },
      error: (err) => {
        console.error('signnup failed', err);
      }
    });
  }
}
