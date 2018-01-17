import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SysMainComponent} from './main/sys-main.component';
import {LoginUserAdminComponent} from './user-admin/user-admin.component';
import {UserListComponent} from './user-list/user-list.component';
import {Routes, RouterModule} from "@angular/router";
import {SystemManagerRouterModule} from "./system-manager.route";
import {DepartAdminComponent} from './depart-admin/depart-admin.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {RedPaperModule} from "../red-paper/red-paper.module";

@NgModule({
  imports: [
    CommonModule,
    SystemManagerRouterModule,
    DataTableModule,
    DropdownModule,
    RedPaperModule
  ],
  declarations: [SysMainComponent, LoginUserAdminComponent, UserListComponent, DepartAdminComponent],
  exports: [
    SysMainComponent,
  ],
})
export class SystemManagerModule {
}
