import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { listingData } from "../interfaces/listingData";
import { SkillList } from "../interfaces/SkillList";
import { Skill, User } from "../interfaces/seller";

@Injectable({
    providedIn:'root'
})
export class AdminService{
    private apiUrl = 'http://localhost:8081/admin/';
     constructor(private http: HttpClient){}

     res:any=[]
     role: string = ''
     addAdmin(data:listingData){return this.http.post(this.apiUrl+'add-admin',data)}
     addSkills(data:SkillList){return this.http.post(this.apiUrl+'add-skills',data)}
     getSkills():Observable<Array<Skill>>{return this.http.get<Array<Skill>>(this.apiUrl+'skills')}
     getAllSkills():Observable<Skill[]>{return this.http.get<Skill[]>(this.apiUrl+'skills')}
     getAllCustomers():Observable<Array<User>>{return this.http.get<Array<User>>(this.apiUrl+'all-customers')}
     getCustomers():Observable<User[]>{return this.http.get<User[]>(this.apiUrl+'all-customers')}
     getAllSellers():Observable<User[]>{return this.http.get<User[]>(this.apiUrl+'all-sellers')}
     getAllAdmins():Observable<User[]>{return this.http.get<User[]>(this.apiUrl+'all-admins')}
     deleteCustomer(num:number){return this.http.delete(this.apiUrl+'remove/customer/'+num)}
     deleteSeller(num:number){return this.http.delete(this.apiUrl+'remove/seller/'+num)}
     deleteSkill(num:number){return this.http.delete(this.apiUrl+'remove/skill/'+num)}
     adminResetPassword(email:string){return this.http.post(this.apiUrl+'reset-password',email)}

  
}