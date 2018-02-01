import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'http-client-wx-user-reback',
  templateUrl: './wx-user-reback.component.html',
  styleUrls: ['./wx-user-reback.component.css']
})

export class WxUserRebackComponent implements OnInit {
  wxUserList: any[] = new Array();
  currentWxUser: any;
  messages:Promise<any[]>;

  constructor(private  messageService: MessageService) {
  }

  ngOnInit() {
      this.refresh();
  }


  addUserToList(user: any): void {
    console.log("addusertoList=" + user);
    this.wxUserList.push(user);
    this.currentWxUser = user;
  }

  select(user: any) {
    this.currentWxUser = user;
    this.messages=this.messageService.getWxUsermessageList(user).toPromise();
    console.log(JSON.stringify(user))
  }

  refresh() {
    console.log("refresh");
    this.messageService.refreshRebackWxUser().toPromise().then(x => {
      console.log("refresh return :"+JSON.stringify(x));
      this.wxUserList=x;
    })
  }

  newUserList() {
    console.log("newUserList");
    this.messageService.getNewUserList().toPromise().then(x => {
      console.log("newUserList return :"+JSON.stringify(x));
      this.wxUserList=x;
    })
  }

  historyUserList() {
    console.log("historyReplyWxUserList");
    this.messageService.getHistoryMessageUserList().toPromise().then(x => {
      console.log("historyReplyWxUserList return :"+JSON.stringify(x));
      this.wxUserList=x;
    })
  }
  activeUserList() {
    console.log("refresh");
    this.messageService.refreshRebackWxUser().toPromise().then(x => {
      console.log("refresh return :"+JSON.stringify(x));
      this.wxUserList=x;
    })
  }


}
