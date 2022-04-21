import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsPage } from './pages/podcasts/podcasts.page';
import { DurationPipe } from './pipes/duration.pipe';


@NgModule({
  declarations: [
    PodcastsPage,
    DurationPipe
  ],
  imports: [
    CommonModule,
    PodcastsRoutingModule
  ]
})
export class PodcastsModule { }
