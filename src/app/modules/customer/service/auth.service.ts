import { Component, Injectable } from "@angular/core";
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private apiUrl = 'http://localhost:8081/customer/';
     constructor(private http: HttpClient){}

     res: any =[];
     login(data:{email:string; password:string}): Observable<any>{
        return this.http.post<any>('http://localhost:8081/login', data,{withCredentials: true})
     }
     logout():Observable<any>{
        return this.http.post<any>('http://localhost:8081/logout',"",{withCredentials: true})
     }
     signUp(data:{name:string; email:string; password:string; phone:string}):Observable<any>{
        return this.http.post<any>(this.apiUrl+'signup', data)
     }
     isLoggedIn():boolean{return !!localStorage.getItem('accessToken')}
     
      getStudentDetails() : Observable<any>{
         this.res= this.http.get(this.apiUrl);
         return this.res;
  }
  getSkills():Observable<any>{
   return this.http.get(this.apiUrl+'skills')
  }
  getSkillById(id:any):Observable<any>{
   return this.http.get(this.apiUrl+'skills/'+id)
  }

  orderRequest(data:{appointmentStart:string; appointmentEnd:string }, id:number): Observable<any>{
   console.log(data,id);
      return this.http.post<any>(this.apiUrl+'order/'+id, data)
  }
  orders():Observable<any>{
      return this.http.get<any>(this.apiUrl+'all-orders')
  }
  rateOrder(orderId:number,ratingValue:number):Observable<any>{
    return this.http.post<any>(this.apiUrl+`order/${orderId}/rate?ratingValue=${ratingValue}`,'',
        {responseType:'text' as 'json'})
  }
}