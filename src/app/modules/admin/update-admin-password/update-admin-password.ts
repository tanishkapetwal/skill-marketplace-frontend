import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../service/auth.service';

@Component({
  selector: 'app-update-admin-password',
  imports: [FormsModule],
  templateUrl: './update-admin-password.html',
  styleUrl: './update-admin-password.css'
})
export class UpdateAdminPassword {
  
  PassData = {
    email: '',
    password: ''
  };

  constructor( private authService:AdminService) {
    const accessToken = localStorage.getItem('accessToken');
  }
  reset(form:any){ form.reset();}
  submitListing(form:any) {
      this.authService.adminNewPassword(this.PassData).subscribe(
        {
          next:()=>{
            alert('Password updated successfully!');
            form.reset();},
          error:(err)=>console.log(err)
          
        }
      )
  }
}