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


@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',

})
export class Dashboard {
  skill: Skill = {avgRating:0,description  :  "",id  :0,price  :  0,sellerUserName  :  "",skillsCategory  :  "",
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
  explore(skills: Array<Skill>) {
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
}
interface Skill {

}
