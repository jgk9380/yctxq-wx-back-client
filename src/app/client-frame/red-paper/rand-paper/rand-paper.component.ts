import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "../../../base/global-config.service";

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

  constructor(private  httpClient: HttpClient, private  gc: GlobalService) {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.openId);
    let url = this.gc.RestBaseUrl + "/public/redPaper/send";
    let data = {openId: this.openId, totalFee: this.totalFee * 100, wishing: this.wishing, remark: this.remark};

    this.httpClient.post(url, data).toPromise().then(x => {
      console.log(JSON.stringify(x));
      alert(x["msg"]);
    }).catch(x => {
      console.log(JSON.stringify(x));
      alert(x["msg"]);
    })
  }
}
