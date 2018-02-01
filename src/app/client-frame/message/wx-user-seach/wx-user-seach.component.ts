import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {MessageService} from "../message.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'http-client-wx-user-seach',
  templateUrl: './wx-user-seach.component.html',
  styleUrls: ['./wx-user-seach.component.css']
})

export class WxUserSeachComponent implements OnInit {
  @Output() selectWxUser = new EventEmitter<any>();
  @Output() refreshUserList = new EventEmitter<any[]>();
  private searchTerms = new Subject<string>();
  wxUsers: Observable<any[]>;


  constructor(private  messageService: MessageService) { }

  ngOnInit() {
    this.wxUsers = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => {
        return term ? this.messageService.search(term) : Observable.of<any[]>([])
      })
      .catch(error => {
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  selectUser(user: any): void {
    this.searchTerms.next("");
    this.selectWxUser.emit(user);
  }
  refresh() {
    this.messageService.refreshRebackWxUser().toPromise().then(x => {
      this.refreshUserList.emit(x);
    })
  }
}
