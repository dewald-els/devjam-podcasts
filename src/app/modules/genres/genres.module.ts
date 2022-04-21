import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresPage } from './pages/genres/genres.page';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenreDetailPage } from './pages/genre-detail/genre-detail.page';


@NgModule({
  declarations: [
    GenresPage,
    GenreListComponent,
    GenreDetailPage
  ],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
