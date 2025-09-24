import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-requests-list',
  imports: [FormsModule],
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
      this.http.get("http://localhost:8081/seller/order-request").subscribe((res:any)=>{
        console.log(res),
        this.SkillsList=res;
      console.log(this.SkillsList)});
  
    }
    SkillsList:any[]=[];
    statuses: String[]=[/*'PENDING',*/'ACCEPTED','REJECTED',/*'COMPLETED'*/];
    statuses1: String[]=[/*'ACCEPTED',*/'COMPLETED'];
    statuses2: String[]=[];
    selectedStatus:String='';
    callFunc(num:number){
      this.http.put(`http://localhost:8081/seller/${num}/change-status?status=${this.selectedStatus}`, {})
      .subscribe({
        next: () => {alert('Status updated successfully!');window.location.reload();},
        error: (err) => alert('Error updating status: ' + err.message)
      });
    }


}
