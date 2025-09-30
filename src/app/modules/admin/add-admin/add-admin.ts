import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';    //import formsModule
import { Router } from '@angular/router';
import { AdminService } from '../service/auth.service';

@Component({
  selector: 'app-add-admin',
  imports: [FormsModule],
  templateUrl: './add-admin.html',
  styleUrl: './add-admin.css'
})
export class AddAdmin {
  
  listingData = {
    name: '',
    email: '',
    password:'',
    phone:0
  };

  constructor( private http: HttpClient,private router:Router, private authService:AdminService) {
    const accessToken = localStorage.getItem('accessToken');
  }
  reset(form:any){ form.reset();
  }
  submitListing() {
    this.authService.addAdmin(this.listingData)
      .subscribe({
        next: () => {
          alert('Admin created successfully!');
         this.router.navigateByUrl('admin-dashboard/admin-list');
        },
        error: (err) => {console.error(err);
           alert('Error Occured! Plz try again');
        }
      });
  }
}