import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CustomerRoutingModule } from './customer-routing-module';
import { CustomerComponent } from './components/customer/customer.component'; 


@NgModule({
  declarations: [HomeComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
