import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from "rxjs";
import { jwtDecode } from 'jwt-decode';
@Injectable({
   providedIn: 'root'
})

export class AuthService {
   constructor(private http: HttpClient) { }

   res:any=[]
   getUser(): string | null {

      const token = localStorage.getItem('accessToken')
      if (!token) return null;
      const decoded = jwtDecode<jwtPayload>(token)
      return decoded.roles[0].slice(5);
   }
   login(data: { email: string; password: string }): Observable<any> {
      this.res = this.http.post<any>('http://localhost:8081/login', data, { withCredentials: true })
      return this.res;
   }
   logout(): Observable<any> {
      return this.http.post<any>('http://localhost:8081/logout', "", { withCredentials: true })
   }
   isLoggedIn(): boolean { return !!localStorage.getItem('accessToken') }
  }
  interface jwtPayload {
   roles: Array<String>;
}