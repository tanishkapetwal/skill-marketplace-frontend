import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/seller';
import { AdminService } from '../service/auth.service';

@Component({
  selector: 'app-seller-list',
  imports: [],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.css'
})
export class SellerList {


    constructor(private http:HttpClient,private router:Router,private authService:AdminService){
      const accessToken = localStorage.getItem('accessToken');

      this.authService.getAllSellers().subscribe((res:User[])=>{this.Seller=res;
        console.log(this.Seller);
      })
    }
    Seller:User[]=[];
    deleteSkill(num:number){
      this.authService.deleteSeller(num).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
    }

  }