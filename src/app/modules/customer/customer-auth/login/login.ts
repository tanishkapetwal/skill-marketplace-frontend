import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustService } from '../../../customer/service/auth.service';
import { AuthService } from '../../../../core/services/authservice';
import { NgIf } from '@angular/common';
import { Route, Router } from '@angular/router';
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

  name:string=''
  role :string=''
  constructor(private authService: AuthService, private router:Router, private custService:CustService) {
    
   }

  onLogin(form: NgForm) {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
      if(res.role==="CUSTOMER"){
        console.log('Login succesful:', res);
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigateByUrl('student-dashboard')
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        this.message = err.message
      }
    });

  }

  onSignup(form: NgForm) {
    this.custService.signUp(this.signupData).subscribe({
      next: (res) => {
        console.log('Signup succesful:', res);

        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigateByUrl('/student-dashboard')
      },
      error: (err) => {
        console.error('signup failed', err);
      }
    });
  }
  
 
}

