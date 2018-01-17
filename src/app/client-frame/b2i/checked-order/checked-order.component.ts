import { Component, OnInit } from '@angular/core';
import {B2iOrder} from "../B2iOrder";
import {B2iService} from "../b2i.service";

@Component({
  selector: 'http-client-checked-order',
  templateUrl: './checked-order.component.html',
  styleUrls: ['./checked-order.component.css']
})
export class CheckedOrderComponent implements OnInit {
  checkedOrder: B2iOrder[];
  constructor(private  bs:B2iService) { }

  ngOnInit() {
    this.bs.getCheckedOrder().then(x => {
      this.checkedOrder = x;
    });
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
}
