import { Component, OnInit } from '@angular/core';
import {B2iOrder} from "../B2iOrder";
import {Http} from "@angular/http";
import {B2iService} from "../b2i.service";

@Component({
  selector: 'http-client-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
 order:B2iOrder;
 info:string;
  constructor(private  bs:B2iService) { }

  ngOnInit() {
    this.order=new B2iOrder();
    this.order.type="dwk";
  }
  submit(){
    if(this.order.certId.length!=18){
      this.info="身份证不对";
      return;
    }
   this.bs.addOrder(this.order.type,this.order.certName,this.order.certId,this.order.orderRemark).then(x=>{
     console.info("order="+JSON.stringify(this.order))
    this.info="你已成功创建订单号为"+x.id+"的订单，订单姓名为："+x.certName;
    this.order=new B2iOrder();
   })
  }


}
