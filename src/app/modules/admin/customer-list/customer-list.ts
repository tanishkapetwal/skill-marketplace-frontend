import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/seller';
import { AdminService } from '../service/auth.service';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList {

    constructor(private http:HttpClient,private router:Router,private authService:AdminService){
      const accessToken = localStorage.getItem('accessToken');

      this.authService.getCustomers().subscribe((res:User[])=>{this.Customer=res;
        console.log(this.Customer);
      })
    }
    Customer:User[]=[];
    deleteSkill(num:number){
      this.authService.deleteCustomer(num).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
    }

}
