import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';    //import formsModule
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SellerService } from '../service/auth.service';

@Component({
  selector: 'app-add-to-listing',
  imports: [FormsModule, CommonModule],                       //import formsModule
  templateUrl: './add-to-listing.html',
  styleUrl: './add-to-listing.css'
})
export class AddToListing {

  skillId: number=0;
  
  listingData = {
    title: '',
    description: '',
    price: 1,
    time: 1
  };

  constructor( private http: HttpClient,private router:Router,private authService:SellerService) {
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
    this.authService.addToListing(this.skillId,this.listingData)
      .subscribe({
        next: () => {
          alert('Listing created successfully!');
          form.reset();this.router.navigateByUrl('teacher-dashboard/seller-listings');
        },
        error: (err) => {console.error(err);
           alert('Error Occured! Plz try again');
        }
      });
  }
}