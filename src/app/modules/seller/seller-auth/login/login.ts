import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../../seller/service/auth.service';
import { AuthService } from '../../../../core/services/authservice';
import { Router } from '@angular/router';
import { Navbar } from "../../../../shared/navbar/navbar";
import { CommonModule } from '@angular/common';

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
  msg:string="New password sent to mail"
  message:string=''
  constructor(private authService: AuthService, private router:Router,private sellerService: SellerService) { }
  seePassword=false;
  togglePassword(){
    this.seePassword = !this.seePassword;
  }
  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {

        if(res.role==="SELLER"){
          console.log('Login succesful:', res);
        localStorage.setItem('accessToken', res.accessToken)
        console.log(localStorage.getItem('accessToken'));
        this.router.navigateByUrl('teacher-dashboard')
        }    
        else{
          this.message = "Bad Credentials"
        } 
        
      },
      error: (err) => {
        console.error('Login failed', err);
        this.message = err.error.message
      }
    });
  }
  resetPassword(email:string){
    if(email===''){
      alert("Email Id can't be null!")
    }
    else{
       this.authService.resetPassword(email).subscribe({
      error:()=>this.msg="Error sending new password"
     });   alert(this.msg)
    }
  }
  onSignup() {
    this.sellerService.signUp(this.signupData).subscribe({
      next: (res) => {
         this.loginData.email = res.email;
        this.loginData.password = res.password;
        this.onLogin()
        console.log('Signup succesful:', res);
      },
      error: (err) => {
        if(err.status===400){
          this.message = 'User already exist';
        }
        console.error('signup failed', err);
      }
    });
  }
}
