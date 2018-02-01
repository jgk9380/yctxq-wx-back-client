import {Component, OnInit} from '@angular/core';
import {MessageService} from "../message.service";

import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'http-client-rand-user-list',
  templateUrl: './rand-user.component.html',
  styleUrls: ['./rand-user.component.css']
})

export class RandUserComponent implements OnInit {
  wxUserList: any[] = new Array();
  currentWxUser: any;
  messages:Promise<any[]>;

  constructor(private  messageService: MessageService) {
  }

  ngOnInit() {

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

  refresh($event) {
      this.wxUserList = $event;
  }
}



