import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import {DevPaperComponent} from "./dev-paper/dev-paper.component";
import {RandPaperComponent} from "./rand-paper/rand-paper.component";
import {RouterModule, Routes} from "@angular/router";
import {PaperQueryComponent} from "./paper-query/paper-query.component";


const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      {path: '',redirectTo:"dev",pathMatch:"full"},
      {path: 'dev', component: DevPaperComponent},
      {path: 'rand', component: RandPaperComponent},
      {path: 'query', component: PaperQueryComponent},
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
export class RedPaperRouteModule { }
