import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserMessageComponent} from './user-message/user-message.component';
import {MainComponent} from './main/main.component';
import {RandUserComponent} from './rand-user/rand-user.component';
import {ActiveUserListComponent} from './active-user-list/active-user-list.component';

import {MessageRouteModule} from "./message.route";
import {MessageService} from "./message.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { UserListComponent } from './wx-user-list/wx-user-list.component';
import { WxUserSeachComponent } from './wx-user-seach/wx-user-seach.component';
import { WxUserRebackComponent } from './wx-user-reback/wx-user-reback.component';



@NgModule({
  imports: [
    CommonModule,
    MessageRouteModule,
    FormsModule,
    HttpModule
    // NgZorroAntdModule
  ],
  declarations: [
    UserMessageComponent,
    MainComponent,
    RandUserComponent,
    ActiveUserListComponent,
    UserListComponent,
    WxUserSeachComponent,
    WxUserRebackComponent,
    ],
  providers:[MessageService]
})
export class MessageModule {

}
