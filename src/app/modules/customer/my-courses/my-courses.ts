import { Component, OnInit, ViewChild } from '@angular/core';
import { CustService } from '../service/auth.service';
import { CommonModule } from '@angular/common';
import { Sidebar } from "../sidebar/sidebar";
import { FormsModule } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, Sidebar, FormsModule, MatPaginator],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.css'
})
export class MyCourses implements OnInit {

  constructor(private service: CustService){}

  orders:Array<Order> = []
  customer:Customer={id: 0,userEmail: "",userName: "",userPhone: ""}
  skills:Array<Skill>=[]
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
interface Customer{
  id: number,userEmail:string,userName: string,userPhone: string
}
interface Skill {
  avgRating: number
  description: string
  id: number
  price: number
  sellerUserName: string
  skillsCategory: string
  skillsDescription: string
  skillsName: string
  time: number
  title: string
}
interface Order{  appointmentEnd: string,appointmentStart: string,
  id: number,orderDate: string,orderRating: number,skillsListingId: number,
  skillsListingSellerUserName: string,skillsListingTitle: string  ,status: string
}