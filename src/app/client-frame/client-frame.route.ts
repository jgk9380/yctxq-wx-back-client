import {RouterModule, Routes, Route} from "@angular/router";

import {FrameComponent} from "./frame/frame.component";

import {NotFoundComponent} from "../not-found/not-found.component";
import {NgModule} from "@angular/core";

import {WpMainComponent} from "../work-plan/wp-main/wp-main.component";
import {WorkPlanRouteModule, wpRoutes} from "../work-plan/work-plan.route";

import {WpCompleteComponent} from "../work-plan/wp-complete/wp-complete.component";
import {WplistComponent} from "../work-plan/wp-list/wplist.component";
import {WpAddComponent} from "../work-plan/wp-add/wp-add.component";
/**
 * Created by jianggk on 2017/7/30.
 */

const cfRoutes: Routes = [
  {
    path: 'frame', component: FrameComponent,
    children: [
      // {path: '',redirectTo:"test3",pathMatch:"full"},
      {path: 'wp', loadChildren: 'app/work-plan/work-plan.module#WorkPlanModule'},
      {path: 'sysAdmin', loadChildren: 'app/client-frame/system-manager/system-manager.module#SystemManagerModule'},
      {path: 'b2i', loadChildren: 'app/client-frame/b2i/b2i.module#B2iModule'},
      {path: 'redPaper', loadChildren: 'app/client-frame/red-paper/red-paper.module#RedPaperModule'},
      {path: 'message', loadChildren: 'app/client-frame/message/message.module#MessageModule'},
      {path: '**', component: NotFoundComponent},
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(cfRoutes),
    WorkPlanRouteModule
  ],
  exports: [
    RouterModule,
    WorkPlanRouteModule
  ],
})


export class ClientFrameRouteModule {


}
