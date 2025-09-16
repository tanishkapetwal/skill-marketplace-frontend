import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';    //import formsModule

@Component({
  selector: 'app-add-to-listing',
  imports: [FormsModule],                       //import formsModule
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

  constructor( private http: HttpClient) {
    const token = localStorage.getItem('token');
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