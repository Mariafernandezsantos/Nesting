import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private baseUrl = 'http://localhost:4000';

  constructor(private httpClient: HttpClient) {}

  public logout(){
    return localStorage.removeItem('JSESSIONID');
  }  
}
