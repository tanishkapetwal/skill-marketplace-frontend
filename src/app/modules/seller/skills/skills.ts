import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../interfaces/skill';
import { SellerService } from '../service/auth.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SellerSkills {
    constructor(private http:HttpClient,private router:Router, private authService:SellerService){
      const accessToken = localStorage.getItem('accessToken');
      this.authService.getSkills().subscribe((res:Skill[])=>{
        this.SkillsList=res;})
    }
    SkillsList:Skill[]=[];
    redirectPage(num:number,str1:String,str2:String){
      this.router.navigate(['/teacher-dashboard/add-to-listing'],{state:{formData:{skillId:num,name:str1,description:str2}}});
    }

}
