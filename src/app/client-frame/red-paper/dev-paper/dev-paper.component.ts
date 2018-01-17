import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "../../../base/global-config.service";

@Component({
  selector: 'http-client-dev-paper',
  templateUrl: './dev-paper.component.html',
  styleUrls: ['./dev-paper.component.css']
})
export class DevPaperComponent implements OnInit {
  resultList: any[];
  feeSize=8;

  constructor(private  httpClient: HttpClient, private  gc: GlobalService) {
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
    console.log(JSON.stringify(info))
    let url = this.gc.RestBaseUrl + "public/redPaper/sendDevRedPaper";

    this.httpClient.post(url,info).toPromise().then(x => {
      console.log(JSON.stringify(x));
      alert(x["msg"]);
    })
  }
}
