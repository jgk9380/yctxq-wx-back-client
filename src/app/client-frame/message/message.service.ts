import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {GlobalService} from "../../base/global-config.service";
import {LoginService} from "../../base/Login.service";

@Injectable()
export class MessageService {
  rebackList: any[];
  newUserList: any[];
  ativeUserList: any[];

  constructor(private  http: Http, private gs: GlobalService, private  ls: LoginService) {
  }

  searchUser(teleOrName: string): Promise<string> {
    return Promise.resolve(teleOrName);
  }

  search(term: string): Observable<any[]> {//用于输入提示框
    console.log(" in searchSea term=" + term);
    //return Observable.of<any[]>([]);
    let url = this.gs.RestBaseUrl + "public/userList/" + term;
    return this.http.get(url).map(response => {
      //console.log("=======" + JSON.stringify(response));
      let body = response["_body"];
      // console.log("response.body=" + body);
      // console.log("response.body=" + JSON.stringify(body));
      let data = JSON.parse(body).data;
      // console.log("response.data=" + JSON.stringify(data));
      // console.log("response.body.data =" + response["_body"].toj["data"]);
      // console.log("response.body.msg =" + response["_body"].toJson()["msg"]);

      return data as any[]
    });
  }

  refreshRebackWxUser(): Observable<any[]> {//查询待回复用户
    //return Observable.of<any[]>([]);
    let url = this.gs.RestBaseUrl + "public/rebackWxUser"
    return this.http.get(url).map(response => {
      let body = response["_body"];
      let data = JSON.parse(body).data;
      this.rebackList=data;
      return data as any[]
    });
  }

  getNewUserList(): Observable<any[]> {//查询待回复用户
    //return Observable.of<any[]>([]);
    let url = this.gs.RestBaseUrl + "public/newUserNoReply"
    return this.http.get(url).map(response => {
      let body = response["_body"];
      let data = JSON.parse(body).data;
      // this.newUserList=data;
      return data as any[]
    });
  }

  getHistoryMessageUserList(): Observable<any[]> {//查询历史回复用户
    //return Observable.of<any[]>([]);
    let url = this.gs.RestBaseUrl + "public/historyReplyWxUserList"
    return this.http.get(url).map(response => {
      let body = response["_body"];
      let data = JSON.parse(body).data;
      // this.newUserList=data;
      return data as any[]
    });
  }

  getWxUsermessageList(wxUser: any): Observable<any[]> {//查询待回复用户
    //return Observable.of<any[]>([]);
    let url = this.gs.RestBaseUrl + "public/userMessageList/" + wxUser.id;
    return this.http.get(url).map(response => {
      let body = response["_body"];
      let data = JSON.parse(body).data;
      return data as any[]
    });
  }

  async getRebackMessageCount(wxUser: any): Promise<any> {
    let url = this.gs.RestBaseUrl + "public/userMessageListCount/" + wxUser.id;
    return this.http.get(url).map(response => {
      let body = response["_body"];
      let data = JSON.parse(body).data;
      return data as any[]
    }).toPromise();
  }


  replayMessage(message: string, wxUser: any): Promise<any> {
    let url = this.gs.RestBaseUrl + "public/replyMessage/" + this.ls.userId + "/" + wxUser.id + "/" + message;
    return this.http.post(url, this.gs.getJsonHeade()).map(response => {
      let body = response["_body"];
      let data = JSON.parse(body).data;
      return data as any[]
    }).toPromise();
  }
}
