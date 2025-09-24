import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {

  constructor(private auth:AuthService){}
    LogOut(){this.auth.logOut();}
}
