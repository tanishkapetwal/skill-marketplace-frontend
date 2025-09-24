import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-list',
  imports: [],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.css'
})
export class SkillList {

    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');
// if (token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   console.log('Decoded JWT payload:', payload);
// }
      this.http.get("http://localhost:8081/admin/skills").subscribe((res:any)=>{this.SkillsList=res;})
    }
    SkillsList:any[]=[];
    deleteSkill(num:number){
      this.http.delete(`http://localhost:8081/admin/remove/skill/${num}`).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
    }

}
