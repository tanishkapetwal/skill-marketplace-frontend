import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-requests-list',
  imports: [],
  templateUrl: './order-requests-list.html',
  styleUrl: './order-requests-list.css'
})
export class OrderRequestsList {
    constructor(private http:HttpClient){
      const token = localStorage.getItem('token');
// if (token) {
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   console.log('Decoded JWT payload:', payload);
// }
      this.http.get("http://localhost:8081/seller/order-request").subscribe((res:any)=>{this.SkillsList=res;})
    }
    SkillsList:any[]=[];
    


}
