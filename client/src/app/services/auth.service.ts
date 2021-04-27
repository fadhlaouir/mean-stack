import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:5000/"

  constructor(private http: HttpClient) { }

  registerUser(user: Object) {
    return this.http.post(`${this.domain}authentication/register`, user)
  }
}
