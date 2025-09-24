import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';    //import formsModule
import { Router } from '@angular/router';

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

  constructor( private http: HttpClient,private router:Router) {
    const token = localStorage.getItem('token');
  }
  reset(form:any){ form.reset();
  }
  submitListing() {
    this.http.post(`http://localhost:8081/admin/add-admin`, this.listingData)
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