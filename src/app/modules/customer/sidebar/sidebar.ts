import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  sidebar=true;
  constructor(private router: Router, private authservice:AuthService){}
  toggleSidebar(){
    this.sidebar=!this.sidebar;
  }
  logout(){
    this.authservice.logout().subscribe({
      next: (response) =>{ console.log('Response:', response);localStorage.removeItem('accessToken');  this.router.navigateByUrl('student/login')},
      error: (error) => console.error('Error:', error)
     }); 
   
  }
}