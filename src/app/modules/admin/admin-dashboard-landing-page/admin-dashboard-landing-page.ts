import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../interfaces/seller';
import { User } from '../interfaces/seller';

@Component({
  selector: 'app-admin-dashboard-landing-page',
  imports: [],
  templateUrl: './admin-dashboard-landing-page.html',
  styleUrl: './admin-dashboard-landing-page.css'
})
export class AdminDashboardLandingPage {

    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');

      this.http.get<Array<Skill>>("http://localhost:8081/admin/skills").subscribe((res:Array<Skill>)=>{this.SkillsList=res;});
      this.http.get<Array<User>>("http://localhost:8081/admin/all-customers").subscribe((res:Array<User>)=>{
        this.CustomerList=res;
      });
    }
    SkillsList:Skill[]=[];
    CustomerList:User[]=[];
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
