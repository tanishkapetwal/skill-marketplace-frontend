import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../../seller/service/auth.service';
import { AuthService } from '../../../../core/services/authservice';
import { Router } from '@angular/router';
import { Navbar } from "../../../../shared/navbar/navbar";

@Component({
  selector: 'app-login',
  imports: [FormsModule, Navbar],
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
  message:string=''
  constructor(private authService: AuthService, private router:Router,private sellerService: SellerService) { }
  onLogin(form: any) {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {

        if(res.role==="SELLER"){
          console.log('Login succesful:', res);

        localStorage.setItem('accessToken', res.accessToken)
        console.log(localStorage.getItem('accessToken'));
        this.router.navigateByUrl('teacher-dashboard')
        }
        
        
        
      },
      error: (err) => {
        console.error('Login failed', err);
        this.message = "Bad Credentials"
      }
    });
  }

  onSignup(form: any) {
    this.sellerService.signUp(this.signupData).subscribe({
      next: (res) => {
        console.log('Signup succesful:', res);
        if(res && res.token){
          localStorage.setItem('accessToken', res.accessToken)
        }
        this.router.navigateByUrl('teacher-dashboard')
      },
      error: (err) => {
        console.error('signup failed', err);
      }
    });
  }
}
