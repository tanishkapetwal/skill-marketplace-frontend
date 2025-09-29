import { Component, OnInit, ViewChild } from '@angular/core';
import { CustService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { Sidebar } from "../sidebar/sidebar";
import { FormsModule } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Order, skillList } from '../interfaces/student';
import { student } from '../interfaces/student';


@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, Sidebar, FormsModule, MatPaginator],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.css'
})
export class MyCourses implements OnInit {

  constructor(private service: CustService){}

  orders:Array<Order> = []
  customer:student={id: 0,userEmail: "",userName: "",userPhone: ""}
  skills:Array<skillList>=[]
  selectRating:number=0
  ratingSubmitted=false;
 @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
    this.service.getStudentDetails().subscribe((res: any) => {
      this.customer = res
    });
    this.getOrders()
    
  }
  totalOrders=0;
  pageSize =5;
  pageIndex = 0;
  getOrders(){
    this.service.orders(this.pageIndex).subscribe((res)=>{
      this.totalOrders = res.totalElements
      this.orders = res.content;
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;    
    this.getOrders();
  }
  rate(orderId:number,ratingValue:number){
    this.selectRating = ratingValue;
    this.service.rateOrder(orderId, ratingValue).subscribe((res:any)=>{
      this.ratingSubmitted=true;
      this.getOrders()
    });
  }
}
