import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private apiUrl = 'http://localhost:8081/customer/login';
     constructor(private http: HttpClient){}

     login(data:{email:string; password:string}): Observable<any>{
        return this.http.post<any>(this.apiUrl, data)
     }
}