import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  imports: [],
  templateUrl: './seller-list.html',
  styleUrl: './seller-list.css'
})
export class SellerList {


    constructor(private http:HttpClient,private router:Router){
      const token = localStorage.getItem('token');
// if (token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   console.log('Decoded JWT payload:', payload);
// }
      this.http.get("http://localhost:8081/admin/all-sellers").subscribe((res:any)=>{this.SkillsList=res;
        console.log(this.SkillsList);
      })
    }
    SkillsList:any[]=[];
    deleteSkill(num:number){
      this.http.delete(`http://localhost:8081/admin/remove/seller/${num}`).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
    }

}
