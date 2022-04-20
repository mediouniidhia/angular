import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usermodel } from '../dd/usermodel';
const API_URL = 'http://localhost:8083/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private a ="http://localhost:8083/api/test/get";
  private d ="http://localhost:8083/api/test/delete";
  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getusers():Observable<usermodel[]>{
    return this.http.get<usermodel[]>(this.a);
  }
  deleteuser(id:number) :Observable<object>{
    return this.http.delete(`${this.d}/${id}`);
  }
}