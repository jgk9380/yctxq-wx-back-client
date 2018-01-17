/**
 * Created by jianggk on 2017/8/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {OrderMainComponent} from "./order-main/order-main.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {CheckOrderComponent} from "./check-order/check-order.component";
import {AddOrderComponent} from "./add-order/add-order.component";
import {CheckedOrderComponent} from "./checked-order/checked-order.component";
import {MyOrderComponent} from "./my-order/my-order.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

const b2iRoutes: Routes = [
  { path: '', component: OrderMainComponent,
    children: [
      {path: '',redirectTo:"list",pathMatch:"full"},
      {path: 'list', component: OrderListComponent},
      {path: 'check-order/:id', component: CheckOrderComponent},//todo 参数
      {path: 'add', component: AddOrderComponent},
      {path: 'checked', component: CheckedOrderComponent},
      {path: 'myOrder', component: MyOrderComponent},
      {path: 'detail', component: OrderDetailComponent},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(b2iRoutes),
  ],
  exports:[
    RouterModule,
  ],
})
export class B2iRouterModule { }
