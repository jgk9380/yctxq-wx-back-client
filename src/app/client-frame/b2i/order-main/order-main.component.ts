import { Component, OnInit } from '@angular/core';
import {B2iService} from "../b2i.service";
import {Http} from "@angular/http";
import {B2iOrder} from "../B2iOrder";

@Component({
  selector: 'http-client-order-main',
  templateUrl: './order-main.component.html',
  styleUrls: ['./order-main.component.css']
})
export class OrderMainComponent implements OnInit {


  constructor(private bs: B2iService, private  http: Http) {
  }

  ngOnInit() {
    this.bs.init();

  }
}
