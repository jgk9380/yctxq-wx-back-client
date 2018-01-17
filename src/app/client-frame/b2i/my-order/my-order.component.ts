import { Component, OnInit } from '@angular/core';
import {B2iService} from "../b2i.service";
import {B2iOrder} from "../B2iOrder";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'http-client-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
myOrders:B2iOrder[];
  constructor(private  bs:B2iService,private  router:Router,private  route:ActivatedRoute) {}

  ngOnInit() {
    this.bs.init();
    this.bs.getMyOrder().then(myOrders=>this.myOrders=myOrders);
    this.bs.currentOrder=new B2iOrder();
  }
  public customRowClass(rowData: B2iOrder, rowIndex: number): string {
    let result: string;
    if (rowData.status == 1)
      result = "checking-row";
    // console.log("  index="+rowIndex+" rowData.status="+rowData.status+"  return="+result);
    if (rowData.status == 2)
      result = "checked-row";
    // console.log("  index="+rowIndex+" rowData.status="+rowData.status+"  return="+result);
    return result;
  }

 clickRow(event) {
    console.info(JSON.stringify(event));
    //this.router.navigate(["../check-order",event.data.id]);
    this.bs.currentOrder = event.data;
   this.router.navigate(["../detail"], {relativeTo: this.route});
    //todo 提交保存进入更改状态
    //   this.bs.checkOrder(this.bs.currentOrder.id)
    //     .then(x => this.router.navigate(["../detail"], {relativeTo: this.route}));
  }
}
