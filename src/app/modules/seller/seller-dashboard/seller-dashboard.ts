import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-seller-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css'
})
export class SellerDashboard {

  constructor(private auth:AuthService){}
    LogOut(){this.auth.logOut();}
}
