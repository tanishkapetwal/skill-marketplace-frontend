import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../interfaces/skill';
import { Customer } from '../interfaces/customer';

@Component({
  selector: 'app-admin-dashboard-landing-page',
  imports: [],
  templateUrl: './admin-dashboard-landing-page.html',
  styleUrl: './admin-dashboard-landing-page.css'
})
export class AdminDashboardLandingPage {

    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');

      this.http.get("http://localhost:8081/admin/skills").subscribe((res:any)=>{this.SkillsList=res;});
      this.http.get("http://localhost:8081/admin/all-customers").subscribe((res:any)=>{
        console.log(res),
        this.CustomerList=res;
      console.log(this.CustomerList)});
    }
    SkillsList:Skill[]=[];
    CustomerList:Customer[]=[];
    exploreAdmins(){
      this.router.navigate(['/admin-dashboard/admin-list']);
    }
    exploreSkills(){
      this.router.navigate(['/admin-dashboard/skill-list']);
    }
    exploreCustomers(){
      this.router.navigate(['/admin-dashboard/customer-list']);
    }
}
