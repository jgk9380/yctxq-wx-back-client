///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "../../../base/global-config.service";

@Component({
  selector: 'http-client-paper-query',
  templateUrl: './paper-query.component.html',
  styleUrls: ['./paper-query.component.css']
})

export class PaperQueryComponent implements OnInit {
  d2 = new Date();
  d1 = new Date(this.d2.getTime() - 1000 * 3600 * 24);
  success=true;
  resultList: any[];

  tele: string;

  constructor(private  httpClient: HttpClient, private  gc: GlobalService) {
    //this.d2 = new Date();
    // this.d1.setTime(this.d2.getTime() - 1000 * 3600 * 24);
  }

  ngOnInit() {

  }

  submit() {
    console.log("d1=" + JSON.stringify(this.d1) + " " + typeof this.d1);
    console.log("tele=" + this.tele);
    let url = this.gc.RestBaseUrl + "public/redPaper/list?date1=" + this.d1.getTime() + "&date2=" + this.d2.getTime()+"&success="+this.success;
    this.httpClient.get(url).toPromise()
      .then(x => {
        //console.log(JSON.stringify(x));
        this.resultList = x["data"];
        console.log(JSON.stringify(this.resultList));
      })
  }
}
