import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustService } from '../service/auth.service';
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

  skill:Skill={avgRating:0,description  :  "",id  :0,price  :  0,sellerUserName  :  "",skillsCategory  :  "",
    skillsDescription  :  "",skillsName  :  "",time  :  0,title  :""
  }
  constructor(private service: CustService, private router:Router){

    const nav= this.router.getCurrentNavigation();
    const data= nav?.extras.state as {formData: any};
    console.log(data.formData)
    if(data){
      this.skill = data.formData
    }
  }
  showModal= false;
  onClick(){
    this.showModal = true;
    
  }
  closeSkillModal(){
    this.showModal = false;
  }

   eventDateTime: string = '';
  onSubmit(form: NgForm, id:number): void {
    if (form.valid) {
      console.log('Form Submitted!', this.appointmentData.appointmentStart);
       console.log('Form Submitted!', this.appointmentData.appointmentEnd);
       
      this.service.orderRequest(this.appointmentData, id).subscribe((res)=>{
        alert('Order Created Successfully');
        console.log("completed");
        this.closeSkillModal();
      })
  
    //   this.service.emailSeller(id).subscribe({
    //   next: (data) => {
    //   console.log("Email sent")
    //   },
    //   error: (err) => {
    //     console.error('Error fetching data:', err);
        
    //   }
    // });
    }
  }

}
interface Skill {
  avgRating: number
  description: string
  id: number
  price: number
  sellerUserName: string
  skillsCategory: string
  skillsDescription: string
  skillsName: string
  time: number
  title: string
}
