import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalService} from "../../../base/global-config.service";
import {Headers, Http} from "@angular/http";

@Component({
  selector: 'http-client-rand-paper',
  templateUrl: './rand-paper.component.html',
  styleUrls: ['./rand-paper.component.css']
})
export class RandPaperComponent implements OnInit {

  openId: string;
  totalFee: number;
  wishing = "恭喜发财，生意兴隆！";
  remark = "备注";

  constructor(private  http: Http, private  gc: GlobalService) {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.openId);
   let  tfee = new Number(this.totalFee * 100).toFixed(0);
    let url = this.gc.RestBaseUrl + "/public/redPaper/send";
    let data = {openId: this.openId, totalFee: tfee, wishing: this.wishing, remark: this.remark,sendName:"盐城通信圈"};
    console.log("data.info="+JSON.stringify(data))
    //let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    this.http.post(url, data ).toPromise().then(x => {
      let y=JSON.parse(x["_body"])
      console.log(JSON.stringify(x["_body"]));
      alert(y.msg);
    }).catch(x => {
      console.log("x="+JSON.stringify(x));
      alert("error:"+x['_body'].msg);
    })
  }
}
