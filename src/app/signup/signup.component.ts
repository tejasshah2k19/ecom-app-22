import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService:SessionService) { }
  firstName: string = ""
  email: string = ""
  password: string = ""
  ngOnInit(): void {

  }
  signup()
  {
    let user = {firstName:this.firstName,email:this.email,password:this.password}

    this.sessionService.signup(user).subscribe(resp=>{
      if(resp.status == 200){
        alert("signup done")
      }else{
        alert(resp.msg)
      }
    })
  }
}
