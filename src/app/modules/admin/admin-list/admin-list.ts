import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  imports: [],
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css'
})
export class AdminList {


    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');

      this.http.get("http://localhost:8081/admin/all-admins").subscribe((res:any)=>{this.SkillsList=res;
        console.log(this.SkillsList);
      })
    }
    SkillsList:Admin[]=[];

}
interface Admin{
id:number
userEmail:string
userName:string
userPhone:number
}