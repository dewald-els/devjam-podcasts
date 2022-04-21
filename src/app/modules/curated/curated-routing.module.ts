import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CuratedPage } from "./pages/curated/curated.page";
import { CuratedPlaylistPage } from "./pages/curated-playlist/curated-playlist.page";

const routes: Routes = [
  {
    path: "",
    component: CuratedPage,
  },
  {
    path: ":curatedId",
    component: CuratedPlaylistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuratedRoutingModule {
}
