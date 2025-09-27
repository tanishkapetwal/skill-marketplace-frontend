import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SellerSkills {
    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');
      this.http.get("http://localhost:8081/seller/skills").subscribe((res:any)=>{
        this.SkillsList=res;})
    }
    SkillsList:Skill[]=[];
    redirectPage(num:number,str1:String,str2:String){
      this.router.navigate(['/teacher-dashboard/add-to-listing'],{state:{formData:{skillId:num,name:str1,description:str2}}});
    }

}
interface Skill{
category:string;
description:string;
id:number;
name:string; }