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
        return this.http.post<any>(this.apiUrl+'login', data,{withCredentials: true})
     }
     signUp(data:{name:string; email:string; password:string; phone:string}):Observable<any>{
        return this.http.post<any>(this.apiUrl+'signup', data)
     }
     isLoggedIn():boolean{return !!localStorage.getItem('accessToken')}
     logout():Observable<any>{
        return this.http.post<any>(this.apiUrl+'logout',"",{withCredentials: true})
     }
   //   delete(id:number):Observable<any>{

   //       return  this.http.delete(`http://localhost:8081/seller/delete/${id}`)
   //   }
}