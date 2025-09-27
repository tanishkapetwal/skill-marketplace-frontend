import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustService } from '../service/auth.service';
import { ActivatedRoute, ParamMap, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Skills } from '../skills/skills';
import { NgIf } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { NotificationService } from '../service/notification.service';


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
  skills: Array<Skill> = []
  custID: number = 0
  notifications: notifications[] = []
  constructor(private custService: CustService, private router: Router,
    private route: ActivatedRoute, private notificationService: NotificationService) {
    this.getStudent(),
      this.getSkills(),


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
    this.custService.getStudentDetails().subscribe((res: any) => {
      console.log(res)
      this.name = res.userName;
      this.custID = res.id;
      this.notificationService.setCustId(this.custID)
    })
  }
  getSkills() {
    this.custService.getSkills().subscribe((res: any) => {
      console.log(res);
      this.skills = res;
      console.log(this.skills)
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
interface notifications{
  orderId: number,
  message: string

}
