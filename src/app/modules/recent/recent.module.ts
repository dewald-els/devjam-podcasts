import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentRoutingModule } from './recent-routing.module';
import { RecentPage } from './pages/recent/recent.page';


@NgModule({
  declarations: [
    RecentPage
  ],
  imports: [
    CommonModule,
    RecentRoutingModule
  ]
})
export class RecentModule { }
