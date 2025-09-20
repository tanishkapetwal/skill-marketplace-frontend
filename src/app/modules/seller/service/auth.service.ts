import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private apiUrl = 'http://localhost:8081/seller/';
     constructor(private http: HttpClient){}

     login(data:{email:string; password:string}): Observable<any>{
        return this.http.post<any>(this.apiUrl+'login', data)
     }
     signUp(data:{name:string; email:string; password:string; phone:string}):Observable<any>{
        return this.http.post<any>(this.apiUrl+'signup', data)
     }
     isLoggedIn():boolean{return !!localStorage.getItem('token')}
     logOut(){localStorage.removeItem('token')}
   //   delete(id:number):Observable<any>{

   //       return  this.http.delete(`http://localhost:8081/seller/delete/${id}`)
   //   }
}