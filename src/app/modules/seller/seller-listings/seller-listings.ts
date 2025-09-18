import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-seller-listings',
  imports: [FormsModule,NgFor],
  templateUrl: './seller-listings.html',
  styleUrl: './seller-listings.css'
})
export class SellerListings {
    constructor(private http:HttpClient  ,/* private authService: AuthService */){
      const token = localStorage.getItem('token');
// if (token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   console.log('Decoded JWT payload:', payload);
// }
      this.http.get("http://localhost:8081/seller/skill-listings").subscribe((res:any)=>{
        console.log(res),
        this.SkillsList=res;
      console.log(this.SkillsList)});
  
    }
    SkillsList:any[]=[];
    // deleted:any;
    callFunc(num:number){
      this.http.delete(`http://localhost:8081/seller/delete/${num}`).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
      // console.log("delete calling")
      //  this.authService.delete(num).subscribe((res)=>{
      //               console.log(res)

      // });
        
      // window.location.reload(); 
      }
    }

