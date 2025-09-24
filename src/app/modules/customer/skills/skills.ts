import { NgFor } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Sidebar } from '../sidebar/sidebar';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-skills',
  imports: [NgFor, Sidebar,FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit{

  skill:any={}
  skills: Array<any> = []

  selectedCategory:string='';
  categories:string[]=[];

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router ){ }
  ngOnInit(){
    const stored =localStorage.getItem('skills');
    this.skills = stored ? JSON.parse(stored):[]
    console.log(this.skills)
    this.categories = [...new Set (this.skills.map(s=>s.skillsCategory))]
  }

  filteredSkills(){
    if(!this.selectedCategory)return this.skills;
    return this.skills.filter(s=>s.skillsCategory===this.selectedCategory)
  }
   openSkill(id:any){
    this.authService.getSkillById(id).subscribe((res:any)=>
    {
      console.log(res);
      this.skill=res;
      localStorage.setItem('skillById', JSON.stringify(this.skill));
      this.router.navigate(['/skills',id])
    })    
  }


}

