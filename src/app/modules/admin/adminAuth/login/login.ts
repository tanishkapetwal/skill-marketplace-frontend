import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/authservice';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from "../../../../shared/navbar/navbar";
import { AdminService } from '../../service/auth.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule, Navbar, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginData = {
    'email': '',
    'password': ''
  }
  msg: string = "New password sent to mail"
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
  constructor(private authService: AuthService, private router: Router, private adminService: AdminService) { }
  seePassword = false;
  togglePassword() {
    this.seePassword = !this.seePassword
  }
  resetPassword(email: string) {
    if (email === '') {
      alert("Email Id can't be null!")
    }
    else {
      this.authService.resetPassword(email).subscribe({
        error: () => this.msg = "Error sending new password"
      }); alert(this.msg)
    }
  }
  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        if (res.role === "ADMIN") {
          localStorage.setItem('accessToken', res.accessToken)
          this.router.navigateByUrl('admin-dashboard')
        }
        else {
          this.message = "Bad Credentials"
        }
      },
      error: (err) => {
        console.error('Login failed', err);
        if(err.error === null){
          this.message = "Bad Credentials"
        }
        this.message = err.error.message
      }
    });

  }
}
