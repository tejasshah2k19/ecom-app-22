import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin/services/admin.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private sessionService: SessionService) { }
  email: string = ""
  password: string = ""

  ngOnInit(): void {


  }

  authenticate() {
    console.log(this.email);

    let data = { email: this.email, password: this.password }

    this.sessionService.authenticate(data).subscribe(resp => {

      if (resp.status == 200) {
        if (resp.data.roleId == 2) {
          //customer
          alert("customer")
        } else if (resp.data.roleId == 1) {
          //admin 
          this.adminService.setAdmin(true)
          this.router.navigateByUrl("/admin/dashboard")
        }
      } else {
        alert("invalid credentials....")
      }

    })

  }

}
