import { NgFor } from '@angular/common';
import { Component, Input, input, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustService } from '../service/auth.service';
import { Sidebar } from '../sidebar/sidebar';
import { FormsModule, NgModel } from '@angular/forms';
import { skillList } from '../interfaces/student';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-skills',
  imports: [Sidebar,FormsModule,MatPaginator],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit{

  skill:skillList={avgRating:0,description  :  "",id  :0,price  :  0,sellerUserName  :  "",skillsCategory  :  "",
    skillsDescription  :  "",skillsName  :  "",time  :  0,title  :""
  }
  skills: Array<skillList> = []

  selectedCategory:string='';
  categories:string[]=[];
  
  constructor(private route: ActivatedRoute, private authService: CustService, private router: Router ){
     const nav= this.router.getCurrentNavigation();
    // const data= nav?.extras.state as {formData: any};
    
   
   }
  ngOnInit(){    this.getSkills()}
   getSkills(){
    this.authService.getSkills(this.pageIndex).subscribe((res)=>{
        this.totalElements=res.totalElements
        this.skills = res.content
        console.log(this.skills);
       this.categories = [...new Set (this.skills.map(s=>s.skillsCategory))]
      })
   }
   getImg(){    
    return this.img[Math.floor(Math.random()*this.img.length)]
   }
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

@ViewChild(MatPaginator) paginator!: MatPaginator;
 totalElements=0;
  pageSize =6;
  pageIndex = 0;
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.getSkills()    
    this.filteredSkills();
  }
  img=[
    "https://media.istockphoto.com/id/1138372470/vector/business-hr-concept-human-resources-manager-hiring-employee-for-job.jpg?s=2048x2048&w=is&k=20&c=SO1gD-x38FGteDkQZvAq1Hrr9Jz4BKhD--CotoDkRSg=",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240501161048/SQL-Databases.png",
    "https://media.istockphoto.com/id/1408821734/photo/business-strategy-development-and-growing-growth-plan-financial-management-strategy-for.jpg?s=612x612&w=0&k=20&c=66KZpiB7BvQB_5eFLbQZ_6Z03tzMHLBh1oTR4KTHA9k=",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
  ]
}

