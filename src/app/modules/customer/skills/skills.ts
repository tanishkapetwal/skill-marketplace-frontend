import { NgFor } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustService } from '../service/auth.service';
import { Sidebar } from '../sidebar/sidebar';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-skills',
  imports: [NgFor, Sidebar,FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit{

  skill:Skill={avgRating:0,description  :  "",id  :0,price  :  0,sellerUserName  :  "",skillsCategory  :  "",
    skillsDescription  :  "",skillsName  :  "",time  :  0,title  :""
  }
  skills: Array<Skill> = []

  selectedCategory:string='';
  categories:string[]=[];

  constructor(private route: ActivatedRoute, private authService: CustService, private router: Router ){
     const nav= this.router.getCurrentNavigation();
    const data= nav?.extras.state as {formData: any};
    if(data){
      this.skills = data.formData
    }
    this.categories = [...new Set (this.skills.map(s=>s.skillsCategory))]
   }
  ngOnInit(){  }

  filteredSkills(){
    if(!this.selectedCategory)return this.skills;
    return this.skills.filter(s=>s.skillsCategory===this.selectedCategory)
  }
   openSkill(id:number){
    this.authService.getSkillById(id).subscribe((res:any)=>
    {
      this.skill=res;
      this.router.navigate(['/student-dashboard/skills',id],{state:{formData:res}})
    })    
  }


}
interface Skill {
  avgRating: number
  description: string
  id: number
  price: number
  sellerUserName: string
  skillsCategory: string
  skillsDescription: string
  skillsName: string
  time: number
  title: string
}

