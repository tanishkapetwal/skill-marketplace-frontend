import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';    //import formsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  imports: [FormsModule],
  templateUrl: './add-skill.html',
  styleUrl: './add-skill.css'
})
export class AddSkill {


  statuses: String[]=['LANGUAGE','FRONTEND','BACKEND','DATASCIENCE','MACHINELEARNING'];
  
  listingData = {
    name: '',
    description: '',
    category:''
  };

  constructor( private http: HttpClient,private router:Router) {
    const accessToken = localStorage.getItem('accessToken');
  }
  reset(form:any){ form.reset();
                    this.listingData.category='';
  }
  submitListing() {
    this.http.post(`http://localhost:8081/admin/add-skills`, this.listingData)
      .subscribe({
        next: () => {
          alert('Skill created successfully!');
          this.router.navigateByUrl('admin-dashboard/skill-list');
        },
        error: (err) => {console.error(err);
           alert('Error Occured! Plz try again');
        }
      });
  }
}