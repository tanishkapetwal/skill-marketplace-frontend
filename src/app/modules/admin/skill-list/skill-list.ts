import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../interfaces/seller';
import { AdminService } from '../service/auth.service';

@Component({
  selector: 'app-skill-list',
  imports: [],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.css'
})
export class SkillList {

    constructor(private http:HttpClient,private router:Router,private authService:AdminService){
      const accessToken = localStorage.getItem('accessToken');

      this.authService.getAllSkills().subscribe((res:Skill[])=>{this.SkillsList=res;})
    }
    SkillsList:Skill[]=[];
    deleteSkill(num:number){
      this.authService.deleteSkill(num).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
    }

}
