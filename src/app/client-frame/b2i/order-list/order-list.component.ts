import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {B2iOrder} from "../B2iOrder";
import {GlobalService} from "../../../base/global-config.service";
import {Router, ActivatedRoute} from "@angular/router";
import {B2iService} from "../b2i.service";

@Component({
  selector: 'http-client-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {


  constructor(private bs: B2iService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bs.init();
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

  dblClickRow(event) {
    console.info(JSON.stringify(event));
    //this.router.navigate(["../check-order",event.data.id]);
    this.bs.currentOrder = event.data;
    if (this.bs.currentOrder.status == 2)
      return
    //todo 提交保存进入更改状态
    if (this.bs.currentOrder.status == 0 || this.bs.currentOrder.status == 1)
      this.bs.checkOrder(this.bs.currentOrder.id)
        .then(x => this.router.navigate(["../check-order", event.data.id], {relativeTo: this.route}));

  }

  refresh(): void {
    console.info("init")
    this.bs.getUncheckOrder().then(x => {
      this.bs.b2iArray = x;
    });
  }
}

// navigate是Router类的一个方法，主要用来跳转路由。
// 函数定义：
// navigate(commands: any[], extras?: NavigationExtras) : Promise`<boolean>
// interface NavigationExtras {
//   relativeTo : ActivatedRoute
//   queryParams : Params
//   fragment : string
//   preserveQueryParams : boolean
//   preserveFragment : boolean
//   skipLocationChange : boolean
//   replaceUrl : boolean
// }
// this.router.navigate(['user', 1]);
// 以根路由为起点跳转
//
// this.router.navigate(['user', 1],{relativeTo: route});
// 默认值为根路由，设置后相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute
//
// this.router.navigate(['user', 1],{ queryParams: { id: 1 } });
// 路由中传参数 /user/1?id=1
//
// this.router.navigate(['view', 1], { preserveQueryParams: true });
// 默认值为false，设为true，保留之前路由中的查询参数/user?id=1 to /view?id=1
//
// this.router.navigate(['user', 1],{ fragment: 'top' });
// 路由中锚点跳转 /user/1#top
//
// this.router.navigate(['/view'], { preserveFragment: true });
// 默认值为false，设为true，保留之前路由中的锚点/user/1#top to /view#top
//
// this.router.navigate(['/user',1], { skipLocationChange: true });
// 默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效
//
// this.router.navigate(['/user',1], { replaceUrl: true });
// 未设置时默认为true，设置为false路由不会进行跳转
