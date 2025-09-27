import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-landing-page',
  imports: [],
  templateUrl: './dashboard-landing-page.html',
  styleUrl: './dashboard-landing-page.css'
})
export class DashboardLandingPage {
    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');
// if (token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   console.log('Decoded JWT payload:', payload);
// }
      this.http.get("http://localhost:8081/seller/skill-listings").subscribe((res:any)=>{this.SkillsList=res;});
      this.http.get("http://localhost:8081/seller/order-request").subscribe((res:any)=>{
        console.log(res),
        this.OrdersList=res;
      console.log(this.OrdersList)});
    }
    SkillsList:Skill[]=[];
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
interface Skill{
      
avgRating:number
description:string
id:number
price:number
sellerUserName:string
skillsCategory:string
skillsDescription:string
skillsName:string
time:number
title:string }