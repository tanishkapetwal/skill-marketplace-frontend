import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';    //import formsModule
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-to-listing',
  imports: [FormsModule, NgIf],                       //import formsModule
  templateUrl: './add-to-listing.html',
  styleUrl: './add-to-listing.css'
})
export class AddToListing {

  skillId: number=0;
  
  listingData = {
    title: '',
    description: '',
    price: 0,
    time: 0
  };

  constructor( private http: HttpClient,private router:Router) {
    const accessToken = localStorage.getItem('accessToken');
    const nav= this.router.getCurrentNavigation();
    const data= nav?.extras.state?.['formData'];
    if(data){
      this.skillId=data.skillId;
      this.listingData.title=data.name;
      this.listingData.description=data.description;
    }
  }
  reset(form:any){ form.reset();}
  submitListing(form:any) {
    this.http.post(`http://localhost:8081/seller/add-to-listing/${this.skillId}`, this.listingData)
      .subscribe({
        next: () => {
          alert('Listing created successfully!');
          form.reset();
        },
        error: (err) => {console.error(err);
           alert('Error Occured! Plz try again');
        }
      });
  }
}