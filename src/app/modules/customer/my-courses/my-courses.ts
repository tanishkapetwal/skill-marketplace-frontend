import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { Sidebar } from "../sidebar/sidebar";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, Sidebar,FormsModule],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.css'
})
export class MyCourses implements OnInit {

  constructor(private service: AuthService){}

  orders:Array<any> = []
  customer:any=[]
  skills:any=[]
  selectRating:number=0
  ratingSubmitted=false;
  ngOnInit() {
    this.service.getStudentDetails().subscribe((res: any) => {
      this.customer = res
      console.log(res)
    });
    this.service.orders().subscribe((res)=>{
      this.orders = res;
      console.log(this.orders)
    })
    
  }
  rate(orderId:number,ratingValue:number){
    this.selectRating = ratingValue;
    this.service.rateOrder(orderId, ratingValue).subscribe((res)=>{
      this.ratingSubmitted=true;
      console.log(this.ratingSubmitted)
    });
  }
}
