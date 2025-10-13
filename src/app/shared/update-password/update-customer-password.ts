import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/authservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-customer-password',
  imports: [FormsModule, CommonModule],
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
    console.log("Password is ", this.password);
    
      this.authService.customerNewPassword(this.password).subscribe(
        {
          next:()=>{
            alert('Password updated successfully!');
            form.reset();},
          error:(err)=>console.log(err)
          
        }
      )
  }
  seePassword:boolean=false
  togglePassword(){
  this.seePassword=!this.seePassword
}
}
