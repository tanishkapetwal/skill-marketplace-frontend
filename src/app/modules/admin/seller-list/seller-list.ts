import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/seller';

@Component({
  selector: 'app-seller-list',
  imports: [],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.css'
})
export class SellerList {


    constructor(private http:HttpClient,private router:Router){
      const accessToken = localStorage.getItem('accessToken');

      this.http.get("http://localhost:8081/admin/all-sellers").subscribe((res:any)=>{this.Seller=res;
        console.log(this.Seller);
      })
    }
    Seller:User[]=[];
    deleteSkill(num:number){
      this.http.delete(`http://localhost:8081/admin/remove/seller/${num}`).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
    }

  }