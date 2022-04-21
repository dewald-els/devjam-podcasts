import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuratedRoutingModule } from './curated-routing.module';
import { CuratedPage } from './pages/curated/curated.page';
import { CuratedPlaylistPage } from './pages/curated-playlist/curated-playlist.page';


@NgModule({
  declarations: [
    CuratedPage,
    CuratedPlaylistPage,
  ],
  imports: [
    CommonModule,
    CuratedRoutingModule
  ]
})
export class CuratedModule { }
