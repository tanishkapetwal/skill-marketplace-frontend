import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AdminService{
    private apiUrl = 'http://localhost:8081/admin/';
     constructor(private http: HttpClient){}

     res:any=[]
     role: string = ''
  
}