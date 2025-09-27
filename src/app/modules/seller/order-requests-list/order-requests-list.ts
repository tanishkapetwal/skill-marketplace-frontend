import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../service/auth.service';

@Component({
  selector: 'app-order-requests-list',
  imports: [FormsModule],
  templateUrl: './order-requests-list.html',
  styleUrl: './order-requests-list.css'
})
export class OrderRequestsList {
    constructor(private http:HttpClient, private auth:SellerService){
      const accessToken = localStorage.getItem('accessToken');
      this.http.get("http://localhost:8081/seller/order-request").subscribe((res:any)=>{
        
        this.SkillsList=res;console.log(this.SkillsList);
      console.log(this.SkillsList)});
  
    }
    SkillsList:Skill[]=[];
    statuses: string[]=[/*'PENDING',*/'ACCEPTED','REJECTED',/*'COMPLETED'*/];
    statuses1: string[]=[/*'ACCEPTED',*/'COMPLETED'];
    statuses2: string[]=[];
    selectedStatus:string='';
    callFunc(num:number){
     this.auth.changeStatus(num,this.selectedStatus ).subscribe({
        next: (res) => {console.log(res);alert(`Status updated successfully! ${res}`);window.location.reload();},
        error: (err) => {window.location.reload();alert('Status updated!');}
      });
    }


}
interface Skill{
  id:number
ordersCustomerUserName:string
ordersOrderDate:Date
ordersSkillsListingSkillsName:string
ordersStatus:string
skillsListingPrice:number
}
