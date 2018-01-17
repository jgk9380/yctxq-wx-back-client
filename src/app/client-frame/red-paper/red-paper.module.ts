import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DevPaperComponent } from './dev-paper/dev-paper.component';
import { RandPaperComponent } from './rand-paper/rand-paper.component';
import {RedPaperRouteModule} from "./red-paper.route";
import {RedPaperService} from "./red-paper.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { PaperQueryComponent } from './paper-query/paper-query.component';

@NgModule({
  imports: [
    CommonModule,
    RedPaperRouteModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MainComponent, DevPaperComponent, RandPaperComponent, PaperQueryComponent],
  providers:[RedPaperService]

})

export class RedPaperModule { }
