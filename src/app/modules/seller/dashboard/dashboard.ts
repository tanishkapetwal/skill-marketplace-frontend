import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private router:Router,private auth:AuthService){}
    LogOut(){this.auth.logOut();}
}
