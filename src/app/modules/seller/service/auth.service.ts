import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class SellerService{
    private apiUrl = 'http://localhost:8081/seller/';
     constructor(private http: HttpClient){}
     res:any=[]
 role: string = ''

     signUp(data:{name:string; email:string; password:string; phone:string}):Observable<any>{
        return this.http.post<any>(this.apiUrl+'signup', data)
     }
     

     getSellerDetails():Observable<any>{
      return this.http.get<any>(this.apiUrl)
     }
     
     changeStatus(num:number, selectedStatus:string):Observable<any>{
      return  this.http.put(`http://localhost:8081/seller/${num}/change-status?status=${selectedStatus}`,
          { observe: 'response', responseType: 'text' })
     }

}