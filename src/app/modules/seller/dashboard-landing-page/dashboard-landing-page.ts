import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkillList } from '../interfaces/skill-list';
import { SellerService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard-landing-page',
  imports: [],
  templateUrl: './dashboard-landing-page.html',
  styleUrl: './dashboard-landing-page.css'
})
export class DashboardLandingPage {
    constructor(private http:HttpClient,private router:Router,private authService:SellerService){
      const accessToken = localStorage.getItem('accessToken');

      this.authService.getSellerListings().subscribe((res:SkillList[])=>{this.SkillsList=res;});
      this.authService.getOrderRequests().subscribe((res:Order[])=>{
        console.log(res),
        this.OrdersList=res;
      console.log(this.OrdersList)});
    }
    SkillsList:SkillList[]=[];
    OrdersList:Order[]=[];
    exploreMore(){
      this.router.navigate(['/teacher-dashboard/skills']);
    }
    exploreListings(){
      this.router.navigate(['/teacher-dashboard/seller-listings']);
    }
    processOrder(){
      this.router.navigate(['/teacher-dashboard/order-request']);
    }
}
interface Order{
  id:number
ordersCustomerUserName:string
ordersOrderDate:Date
ordersSkillsListingSkillsName:string
ordersStatus:string
skillsListingPrice:number
}
