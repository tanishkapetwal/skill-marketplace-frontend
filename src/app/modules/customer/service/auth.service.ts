import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from "rxjs";
import { student } from "../interfaces/student";
import { PaginatedOrders, skillList } from "../interfaces/student";
@Injectable({
   providedIn: 'root'
})

export class CustService {
   private role: string = ''
   private apiUrl = 'http://localhost:8081/customer/';
   constructor(private http: HttpClient) { }

   res: any = [];

   signUp(data: { name: string; email: string; password: string; phone: string }): Observable<any> {
      return this.http.post<any>(this.apiUrl + 'signup', data)
   }

   getStudentDetails(): Observable<student> {
      this.res = this.http.get<student>(this.apiUrl);
      return this.res;
   }
   getSkills(pageIndex: number): Observable<any> {
      console.log("getSkills");
      
      const params = new HttpParams()
         .set('page', pageIndex.toString())
      return this.http.get<any>(this.apiUrl + 'skills', { params })
   }
   getSkillById(id: number): Observable<skillList> {
      return this.http.get<skillList>(this.apiUrl + 'skills/' + id)
   }

   orderRequest(data: { appointmentStart: string; appointmentEnd: string }, id: number): Observable<void> {
      return this.http.post<void>(this.apiUrl + 'order/' + id, data)
   }

   orders(pageIndex: number): Observable<PaginatedOrders> {
      const params = new HttpParams()
         .set('page', pageIndex.toString())
      return this.http.get<PaginatedOrders>(`${this.apiUrl}orders`, { params })
   }

   rateOrder(orderId: number, ratingValue: number): Observable<string> {
      return this.http.post<string>(this.apiUrl + `order/${orderId}/rate?ratingValue=${ratingValue}`, '',
         { responseType: 'text' as 'json' })
   }
   customerResetPassword(email:string){return this.http.post(this.apiUrl+'reset-password',email)}
   customerNewPassword(PassData:any){return this.http.post(this.apiUrl+'set-password',PassData)}
}
