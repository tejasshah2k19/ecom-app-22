import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admin:boolean = false 
  constructor() { }

  //return 
  public isAdmin():boolean{
    return this.admin
  }
  //true false 
  public setAdmin(admin:boolean){
    this.admin = admin 
  }
  
}
