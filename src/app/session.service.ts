import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }


  signup(user:any):Observable<any>{
    return this.httpClient.post(environment.api_url+"saveuser",user);
  }

  authenticate(data:any):Observable<any>{
    return this.httpClient.post(environment.api_url+"authenticate",data)
  }
}
