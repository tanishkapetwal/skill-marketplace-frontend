import { Component, ViewChild } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustService } from '../service/auth.service';
import { ActivatedRoute, ParamMap, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Skills } from '../skills/skills';
import { NgIf } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { NotificationService } from '../service/notification.service';
import { notifications, skillList, student } from '../interfaces/student';
import { MatPaginator } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { LinkFilterPipe } from '../../../core/pipe/link-list-pipe';


@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, Sidebar, FormsModule, RouterLink,LinkFilterPipe,NgIf],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',

})
export class Dashboard {
  skill: skillList = {avgRating:0,description  :  "",id  :0,price  :  0,sellerUserName  :  "",skillsCategory  :  "",
    skillsDescription  :  "",skillsName  :  "",time  :  0,title  :""
  }
  showSkill: boolean = false;
  selectedSkill: number | null = null;
  mode = true;
  toggleMode() {
    this.mode = !this.mode
  }

  name: string = ''
  skills: any=[]
  custID: number = 0
  notifications: Array<notifications>=[]

@ViewChild(MatPaginator) paginator!: MatPaginator;
   totalOrders=0;
    pageSize=6
    pageIndex = 0;

  constructor(private custService: CustService, private router: Router,
    private route: ActivatedRoute, private notificationService: NotificationService) {
    this.getStudent(),
      this.getSkills(this.pageIndex),

      this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id');
        if (id) {
          this.selectedSkill = +id;
          this.showSkill = true;
        }
        else if (this.router.url.includes('/student-dashboard/skills')) {
          this.showSkill = true;
          this.selectedSkill = this.skills[0].id;
        }
        else {
          this.showSkill = false;
        }
      });
    this.notificationService.notifications$.subscribe(n => this.notifications = n);
  }

  searchText:string ='';
  links=[
    {title:'Technical Skills', url:'/student-dashboard/skills'},
    {title:'Home Page',url:'/student-dashboard'},
    {title:'Rate course',url:'/student-dashboard/my-courses'},
    {title:'Spring boot',url:'/student-dashboard/skill'},
    {title:'My courses',url:'/student-dashboard/my-courses'}
  ];
  getStudent() {
    this.custService.getStudentDetails().subscribe((res: student) => {
      console.log(res)
      this.name = res.userName;
      this.custID = res.id;
      this.notificationService.setCustId(this.custID)
    })
  }
  getSkills(pageIndex:number) {
    this.custService.getSkills(pageIndex).subscribe((res:any) => {
      this.skills = res.content;
    })
  }

  openSkill(id: number) {
    this.custService.getSkillById(id).subscribe((res: any) => {
      console.log(res);
      this.skill = res;
      console.log(this.skill)
      this.router.navigate(['/student-dashboard/skills', id], {state:{formData:res}})
    })
  }
  explore(skills: Array<skillList>) {
    console.log(skills)
    this.router.navigate(['skills'], { relativeTo: this.route, state: { formData: skills } })
  }
  showNotification = false;
  notificationModal() {
    this.showNotification = true;
  }
  closeNotification() {
    this.showNotification = false;
  }
  img=[
    "https://media.istockphoto.com/id/1138372470/vector/business-hr-concept-human-resources-manager-hiring-employee-for-job.jpg?s=2048x2048&w=is&k=20&c=SO1gD-x38FGteDkQZvAq1Hrr9Jz4BKhD--CotoDkRSg=",
    "https://media.geeksforgeeks.org/wp-content/uploads/20240501161048/SQL-Databases.png",
    "https://media.istockphoto.com/id/1408821734/photo/business-strategy-development-and-growing-growth-plan-financial-management-strategy-for.jpg?s=612x612&w=0&k=20&c=66KZpiB7BvQB_5eFLbQZ_6Z03tzMHLBh1oTR4KTHA9k=",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
     "https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg",
     "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
  ]
  getImg(){    
    return this.img[Math.floor(Math.random()*this.img.length)]
   }
}
