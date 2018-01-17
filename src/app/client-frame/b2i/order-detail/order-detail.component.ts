import { Component, OnInit } from '@angular/core';
import {Location}                 from '@angular/common';
import {B2iService} from "../b2i.service";
@Component({
  selector: 'http-client-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor( private  location: Location,private  bs:B2iService) { }

  ngOnInit() {
  }

  back(): void {
    //console.log("back check-order=" + JSON.stringify(this.check-order));
    this.location.back();
  }

}
