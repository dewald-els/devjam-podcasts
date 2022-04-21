import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenresPage } from "./pages/genres/genres.page";
import { GenreDetailPage } from "./pages/genre-detail/genre-detail.page";

const routes: Routes = [
  {
    path: "",
    component: GenresPage,
  },
  {
    path: ":id",
    component: GenreDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresRoutingModule {
}
