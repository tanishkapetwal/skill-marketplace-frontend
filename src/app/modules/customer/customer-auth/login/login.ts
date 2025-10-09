import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CustService } from '../../../customer/service/auth.service';
import { AuthService } from '../../../../core/services/authservice';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from "../../../../shared/navbar/navbar";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, Navbar],
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
   seePassword=false;
   togglePassword(){
      this.seePassword = !this.seePassword;
   }
  msg:string="New password sent to mail"
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
  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
      if(res.role==="CUSTOMER"){
        console.log('Login succesful:', res);
        localStorage.setItem('accessToken', res.accessToken)
        this.router.navigateByUrl('student-dashboard')
        }
        else{
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

  onSignup() {
    this.custService.signUp(this.signupData).subscribe({
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

