import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/authservice';

@Component({
  selector: 'app-update-customer-password',
  imports: [FormsModule],
  templateUrl: './update-customer-password.html',
  styleUrl: './update-customer-password.css'
})
export class UpdateCustomerPassword {
  
  password=''

  constructor( private authService:AuthService) {
    const accessToken = localStorage.getItem('accessToken');
  }
  reset(form:any){ 
    form.reset();
  }
  
  submitListing(form:any) {
      this.authService.customerNewPassword(this.password).subscribe(
        {
          next:()=>{
            alert('Password updated successfully!');
            form.reset();},
          error:(err)=>console.log(err)
          
        }
      )
  }
}