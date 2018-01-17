import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {CheckOrderComponent} from './check-order/check-order.component';
import {OrderMainComponent} from './order-main/order-main.component';
import {B2iRouterModule} from "./b2i.router";
import {AddOrderComponent} from './add-order/add-order.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {B2iService} from "./b2i.service";
import {FormsModule} from "@angular/forms";
import { CheckedOrderComponent } from './checked-order/checked-order.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    B2iRouterModule,
    DataTableModule,
    FormsModule
  ],
  declarations: [OrderListComponent, CheckOrderComponent, OrderMainComponent, AddOrderComponent, CheckedOrderComponent, MyOrderComponent, OrderDetailComponent,],
  providers:[B2iService]
})
export class B2iModule {

}
