import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../service/auth.service';

@Component({
  selector: 'app-update-seller-password',
  imports: [FormsModule],
  templateUrl: './update-seller-password.html',
  styleUrl: './update-seller-password.css'
})
export class UpdateSellerPassword {
  
  PassData = {
    email: '',
    password: ''
  };

  constructor( private authService:SellerService) {
    const accessToken = localStorage.getItem('accessToken');
  }
  reset(form:any){ form.reset();}
  submitListing(form:any) {
      this.authService.sellerNewPassword(this.PassData).subscribe(
        {
          next:()=>{
            alert('Password updated successfully!');
            form.reset();},
          error:(err)=>console.log(err)
          
        }
      )
  }
}