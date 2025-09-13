import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = {
    'email': '',
    'password':''
  }
  
  constructor(private authService: AuthService){}
  onLogin(form:any){
    console.log(this.loginData.email, this.loginData.password)
    this.authService.login(this.loginData).subscribe({
      next:(res)=>{
        console.log('Login succesful:', res);

        localStorage.setItem('token', res.token)
      },
      error:(err)=>{
        console.error('Login failed', err);
      }
    });
  }
}
