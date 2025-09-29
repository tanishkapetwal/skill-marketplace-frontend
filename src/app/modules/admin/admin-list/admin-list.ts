import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/seller';

@Component({
  selector: 'app-admin-list',
  imports: [],
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css'
})
export class AdminList {


    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');

      this.http.get<User[]>("http://localhost:8081/admin/all-admins").subscribe((res:User[])=>{this.Admin=res;
      })
    }
    Admin:User[]=[];

}