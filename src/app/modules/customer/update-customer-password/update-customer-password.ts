import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustService } from '../service/auth.service';

@Component({
  selector: 'app-update-customer-password',
  imports: [FormsModule],
  templateUrl: './update-customer-password.html',
  styleUrl: './update-customer-password.css'
})
export class UpdateCustomerPassword {
  
  PassData = {
    email: '',
    password: ''
  };

  constructor( private authService:CustService) {
    const accessToken = localStorage.getItem('accessToken');
  }
  reset(form:any){ form.reset();}
  submitListing(form:any) {
      this.authService.customerNewPassword(this.PassData).subscribe(
        {
          next:()=>{
            alert('Password updated successfully!');
            form.reset();},
          error:(err)=>console.log(err)
          
        }
      )
  }
}