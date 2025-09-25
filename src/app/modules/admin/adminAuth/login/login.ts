import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';

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
    'phone': ''
  }
  isLogin = true;
  toggle() {

    this.isLogin = !this.isLogin;
  }
  message: string = ''
  constructor(private authService: AuthService, private router:Router) { }
  onLogin(form: any) {
    // if (this.loginData.email === '' || this.loginData.password === '') { this.message = 'Fill all details!' }


    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        if(res.role==="ADMIN"){
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigateByUrl('admin-dashboard')
        }
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });

  }
}
