import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/seller';
import { AdminService } from '../service/auth.service';

@Component({
  selector: 'app-admin-list',
  imports: [],
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css'
})
export class AdminList {


    constructor(private http:HttpClient,private router:Router,private authService:AdminService){
      const accessToken = localStorage.getItem('accessToken');

      this.authService.getAllAdmins().subscribe((res:User[])=>{this.Admin=res;
      })
    }
    Admin:User[]=[];

}