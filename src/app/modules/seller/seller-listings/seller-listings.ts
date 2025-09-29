import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SkillList } from '../interfaces/skill-list';
import { SellerService } from '../service/auth.service';

@Component({
  selector: 'app-seller-listings',
  imports: [],
  templateUrl: './seller-listings.html',
  styleUrl: './seller-listings.css'
})
export class SellerListings {
    constructor(private http:HttpClient  , private authService: SellerService){
      const accessToken = localStorage.getItem('accessToken');

      this.authService.getSellerListings().subscribe((res:SkillList[])=>{
        
        this.SkillsList=res;console.log(this.SkillsList);
      console.log(this.SkillsList)});
  
    }
    SkillsList:SkillList[]=[];
    callFunc(num:number){
      this.authService.deleteListing(num).subscribe({
        next: () => {alert('Deleted successfully!');window.location.reload();},
        error: (err) => alert('Error deleting: ' + err.message)
      });
      }
    }

