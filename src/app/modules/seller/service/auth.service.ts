import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from "rxjs";
import { User } from "../../admin/interfaces/seller";
import { SkillList } from "../interfaces/skill-list";
import { Skill } from "../interfaces/skill";
import { listingData } from "../interfaces/listingData";
import { Order } from "../interfaces/order";

@Injectable({
    providedIn:'root'
})
export class SellerService{
    private apiUrl = 'http://localhost:8081/seller/';
    constructor(private http: HttpClient){}
    role: string = ''

     signUp(data:{name:string; email:string; password:string; phone:string}):Observable<any>{
        return this.http.post<any>(this.apiUrl+'signup', data)
     }
     
     sellerResetPassword(email:string){return this.http.post(this.apiUrl+'reset-password',email)}

     sellerNewPassword(PassData:any){return this.http.post(this.apiUrl+'set-password',PassData)}

     getSellerDetails():Observable<User>{
      return this.http.get<User>(this.apiUrl)
     }
     getSellerListings():Observable<SkillList[]>{
        return this.http.get<SkillList[]>(this.apiUrl+'skill-listings')
     }
     getOrderRequests():Observable<Order[]>{
        return this.http.get<Order[]>(this.apiUrl+'order-request')
     }
     getSkills():Observable<Skill[]>{return this.http.get<Skill[]>(this.apiUrl+'skills')}
     deleteListing(num:number){return this.http.delete(this.apiUrl+'delete/'+num)}
     changeStatus(num:number, selectedStatus:string):Observable<string>{
      return  this.http.put<string>(`http://localhost:8081/seller/${num}/change-status?status=${selectedStatus}`,'')
     }
     addToListing(SkillId:number,data:listingData){return this.http.post(this.apiUrl+'add-to-listing/'+SkillId,data)}
     
}