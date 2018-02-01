import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalService} from "../../../base/global-config.service";
import {Http} from "@angular/http";

@Component({
  selector: 'http-client-dev-paper',
  templateUrl: './dev-paper.component.html',
  styleUrls: ['./dev-paper.component.css']
})
export class DevPaperComponent implements OnInit {
  resultList: any[];
  feeSize=8;

  constructor(private  httpClient: Http, private  gc: GlobalService) {
  }

  ngOnInit() {
  }

  query() {
    let url = this.gc.RestBaseUrl + "public/redPaper/devList";
    this.httpClient.get(url).toPromise().then(x => {
      console.log(JSON.stringify(x));
      this.resultList=x["data"];
    })
  }
  sendRedPaper(info:any) {
    info.fee=this.feeSize;
    info.sendName="盐城通信圈";
    console.log("info="+JSON.stringify(info))
    let url = this.gc.RestBaseUrl + "public/redPaper/sendDevRedPaper";
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8;");
    // this.httpClient.post(url,info,{headers}).toPromise().then(x => {
    this.httpClient.post(url,info).toPromise().then(x => {
      let y=JSON.parse(x["_body"])
      console.log(JSON.stringify(x["_body"]));
      alert(y.msg);
    }).catch(x => {
      console.log("x="+JSON.stringify(x));
      alert("error:"+x['_body'].msg);
    })
  }
}
