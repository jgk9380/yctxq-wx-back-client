import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainComponent} from "./main/main.component";

import {RandUserComponent} from "./rand-user/rand-user.component";

import {WxUserRebackComponent} from "./wx-user-reback/wx-user-reback.component";


const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      {path: '',redirectTo:"reback",pathMatch:"full"},
      // {path: 'main', component:MainComponent},
      {path: 'rand', component: RandUserComponent},
      // {path: 'activeList', component: ActiveUserListComponent},
      // {path: 'historyList', component: HistoryMessageListComponent},
      {path: 'reback', component: WxUserRebackComponent},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,
  ],
})

export class MessageRouteModule { }
