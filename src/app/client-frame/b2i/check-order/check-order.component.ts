import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location}                 from '@angular/common';
import {GlobalService} from "../../../base/global-config.service";
import {B2iOrder} from "../B2iOrder";
import {Http} from "@angular/http";
import {B2iService} from "../b2i.service";

@Component({
  selector: 'http-client-order',
  templateUrl: 'check-order.component.html',
  styleUrls: ['check-order.component.css']
})
export class CheckOrderComponent implements OnInit {
  order: B2iOrder;

  constructor(public route: ActivatedRoute, public router: Router, private  bs: B2iService, private  location: Location) {

  }

  ngOnInit() {
    // this.route.paramMap.switchMap(
    //   (params: ParamMap) => {
    //     return getOrder(+params.get('id'));
    //   }
    // ).subscribe(n => {
    //   this.check-order = n
    // });
    if (!this.bs.currentOrder) {
      console.info("in check-order bs init();");
      this.bs.init();
      if (this.bs.b2iArray)
        this.bs.currentOrder = this.bs.b2iArray[0];
      else
        this.router.navigate(["../../list"], {relativeTo: this.route});
    }
  }


  back(): void {
    //console.log("back check-order=" + JSON.stringify(this.check-order));
    this.location.back();
  }

  submit(): void {
    if (!this.bs.currentOrder.checkOverRemark) {
      alert("请填写派单备注信息");
      return;
    }
    console.log("back to list");
    //this.location.back();
    //this.bs.currentOrder.status=2;
    this.bs.checkOverOrder(this.bs.currentOrder.id, this.bs.currentOrder.checkOverRemark)
      .then(x => {
          this.bs.currentOrder = x;
          this.router.navigate(["../../list"], {relativeTo: this.route});
        }
      )
    //todo 提交保存进入更改状态

  }
}
