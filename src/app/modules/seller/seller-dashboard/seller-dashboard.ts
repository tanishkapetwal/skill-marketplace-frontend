import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-seller-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css'
})
export class SellerDashboard {

  constructor(private auth:AuthService, private router: Router){const accessToken = localStorage.getItem('accessToken');this.getSeller()}
  name: string =''
  getSeller(){
    this.auth.getSellerDetails().subscribe((res)=>{
      console.log(res)
      this.name = res.userName;
    })
  }
   LogOut(){
    this.auth.logout().subscribe((res)=>{
      console.log(res)
      localStorage.removeItem('accessToken')}); 
    //  this.router.navigateByUrl('teacher/login')
  }
}
