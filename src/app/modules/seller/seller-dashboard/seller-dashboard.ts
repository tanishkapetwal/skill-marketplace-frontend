import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SellerService } from '../service/auth.service';
import { AuthService } from '../../../core/services/authservice';

@Component({
  selector: 'app-seller-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css'
})
export class SellerDashboard {
  
  constructor(private seller:SellerService,private auth:AuthService, private router: Router){const accessToken = localStorage.getItem('accessToken');this.getSeller()}
  name: string =''
  getSeller(){
    this.seller.getSellerDetails().subscribe((res:any)=>{
      console.log(res)
      this.name = res.userName;
    })
  }
   LogOut(){
    this.auth.logout().subscribe((res:any)=>{
      console.log("Inside Logout");
      
      localStorage.removeItem('accessToken')}); 
  }
}
