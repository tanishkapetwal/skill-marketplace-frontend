import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../service/auth.service';
import { AuthService } from '../../../../core/services/authservice';
import { NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';
import { Homepage } from '../../../../shared/homepage/homepage';
import { Navbar } from "../../../../shared/navbar/navbar";
@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf, Navbar],
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

    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        if(res.role==="ADMIN"){
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigateByUrl('admin-dashboard')
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        this.message = 'Bad Credentials'
      }
    });

  }
}
