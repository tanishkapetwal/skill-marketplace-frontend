import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-seller-listings',
  imports: [],
  templateUrl: './seller-listings.html',
  styleUrl: './seller-listings.css'
})
export class SellerListings {
    constructor(private http:HttpClient  ,/* private authService: AuthService */){
      const accessToken = localStorage.getItem('accessToken');

      this.http.get("http://localhost:8081/seller/skill-listings").subscribe((res:any)=>{
        
        this.SkillsList=res;console.log(this.SkillsList);
      console.log(this.SkillsList)});
  
    }
    SkillsList:Skill[]=[];
    callFunc(num:number){
      this.http.delete(`http://localhost:8081/seller/delete/${num}`).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
      }
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
