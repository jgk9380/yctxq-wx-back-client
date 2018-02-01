import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'http-client-wx-user-list',
  templateUrl: './wx-user-list.component.html',
  styleUrls: ['./wx-user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() wxUserList: any[] = new Array();
  @Input() currentWxUser: any;
  @Output() currentSelect = new EventEmitter<any>();
  constructor(private messageService:MessageService) {

  }

  ngOnInit() {

  }

  clickUser(user: string) {
    console.log("clickUser:" + user);
    this.currentWxUser = user;
    this.currentSelect.emit(user);
  }




}
