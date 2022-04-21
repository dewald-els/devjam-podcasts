import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PodcastsPage } from "./pages/podcasts/podcasts.page";

const routes: Routes = [
  {
    path: ":podcastId",
    component: PodcastsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodcastsRoutingModule {
}
