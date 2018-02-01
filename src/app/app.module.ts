import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injectable} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, BrowserXhr, Http} from '@angular/http';
import {ButtonModule} from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {LoginService} from "./base/Login.service";
import {MenuModule, PanelMenuModule} from 'primeng/primeng';
import {NavBarService} from "./client-frame/NavBar.service";
import {DialogModule} from 'primeng/primeng';
import {GlobalService} from "./base/global-config.service";
import {AuthenticatedHttpService} from "./base/AuthenticatedHttpService";
import {CorsBrowserXhr} from "./base/cors-browser-xhr.service";
import {BaseAdminModule} from "./client-frame/admin/base/base-admin.module";
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {Routes, RouterModule} from "@angular/router";
import {ClientFrameModule} from "./client-frame/client-frame.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from './not-found/not-found.component';

import {WorkPlanModule} from "./work-plan/work-plan.module";

import {SystemManagerModule} from "./client-frame/system-manager/system-manager.module";
import {DropdownModule} from "primeng/components/dropdown/dropdown";


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    MessagesModule,
    GrowlModule,
    MenuModule,
    PanelMenuModule,
    DialogModule,
    RouterModule.forRoot(routes),
    BaseAdminModule,
    ClientFrameModule,
    WorkPlanModule,
    SystemManagerModule,
    DropdownModule
    //AppRouterModule
  ],
  declarations: [
    LoginComponent,
    MainComponent,
    NotFoundComponent,

  ],
  providers: [
    {provide: BrowserXhr, useClass: CorsBrowserXhr},
    {provide: Http, useClass: AuthenticatedHttpService},
    LoginService,
    NavBarService,
    GlobalService
  ],
  bootstrap: [MainComponent]
})

export class AppModule {

}



