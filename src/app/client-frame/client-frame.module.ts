///<reference path="../../../node_modules/@angular/router/src/router_module.d.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {MenuComponent} from "../menu/Menu.component";
import {NavBar} from "./menu-bar/MenuBar.component";
import {StockComponent} from "./Stock/stock.component";
import {FormsModule} from "@angular/forms";
import {FrameComponent} from "./frame/frame.component";
import {ButtonModule} from "primeng/components/button/button";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {GrowlModule} from "primeng/components/growl/growl";
import {MessagesModule} from "primeng/components/messages/messages";
import {MenuModule} from "primeng/components/menu/menu";
import {PanelMenuModule} from "primeng/components/panelmenu/panelmenu";
import {DialogModule} from "primeng/components/dialog/dialog";
import {Num2chinesePipe} from "../base/num2chinese.pipe";

import {WorkPlanModule} from "../work-plan/work-plan.module";
import {SystemManagerModule} from "./system-manager/system-manager.module";
import {ClientFrameRouteModule} from "./client-frame.route";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {ReduceOperator} from "rxjs/operator/reduce";
import {RedPaperModule} from "./red-paper/red-paper.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DataTableModule,
    MessagesModule,
    GrowlModule,
    MenuModule,
    PanelMenuModule,
    DialogModule,
    ClientFrameRouteModule,
    DropdownModule ,
    SystemManagerModule,
    WorkPlanModule,
    RedPaperModule
  ],
  declarations: [
    NavBar,
    Num2chinesePipe,
    FrameComponent,
    StockComponent,
    MenuComponent,
  ],
  exports: [
    FrameComponent,
    ClientFrameRouteModule
  ],
})

export class ClientFrameModule{
  constructor(){
    console.log("cfm init");
  }
}
