import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
    constructor(private http:HttpClient){
      const token = localStorage.getItem('token');
// if (token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   console.log('Decoded JWT payload:', payload);
// }
      this.http.get("http://localhost:8081/seller/skills").subscribe((res:any)=>{this.SkillsList=res;})
    }
    SkillsList:any[]=[];
    

}
