import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'http-client-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})

export class UserMessageComponent implements OnInit {
  @Input() wxUser: any;
  @Input() messages: Promise<any[]>;


  constructor(private  messService: MessageService) {

  }

  ngOnInit() {

  }

  replayMessage(message: string) {
    this.messService.replayMessage(message, this.wxUser).then(x => {
      console.log("replay=" + JSON.stringify(x));
      if (x == true)
        this.messages = this.messService.getWxUsermessageList(this.wxUser).toPromise()
      if(x==false)
        alert("信息发送失败！")
    });
    // setTimeout(this.messages=this.messService.getWxUsermessageList(this.wxUser).toPromise(),1000)
    // this.messService.getWxUsermessageList(this.wxUser).toPromise().then(x => this.messages = Promise.resolve(x));
  }


}
