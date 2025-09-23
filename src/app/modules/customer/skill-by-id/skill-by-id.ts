import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skill-by-id',
  imports: [NgIf, FormsModule, ],
  templateUrl: './skill-by-id.html',
  styleUrl: './skill-by-id.css'
})
  
export class SkillById {

    appointmentData ={
    'appointmentStart'  : '',
    'appointmentEnd' : ''
   }

  skill:any={}
  constructor(private service: AuthService, private router:Router){
   const stored = localStorage.getItem('skillById');
   this.skill = stored? JSON.parse(stored):{};
   console.log(this.skill)
  }
  showModal= false;
  onClick(){
    this.showModal = true;
  }
  closeSkillModal(){
    this.showModal = false;
  }

   eventDateTime: string = '';
  onSubmit(form: any, id:number): void {
    if (form.valid) {
      console.log('Form Submitted!', this.appointmentData.appointmentStart);
       console.log('Form Submitted!', this.appointmentData.appointmentEnd);
       
      this.service.orderRequest(this.appointmentData, id).subscribe((res)=>{
        console.log("completed")
        this.closeSkillModal()
      })
    }
  }
  backIcon(){
      this.router.navigate(['/skills'])
  }
}
