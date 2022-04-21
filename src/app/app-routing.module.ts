import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/curated",
  },
  {
    path: "curated",
    loadChildren: () => import("./modules/curated/curated.module").then(m => m.CuratedModule),
  },
  {
    path: "genres",
    loadChildren: () => import("./modules/genres/genres.module").then(m => m.GenresModule),
  },
  {
    path: "search",
    loadChildren: () => import("./modules/search/search.module").then(m => m.SearchModule),
  },
  {
    path: "recent",
    loadChildren: () => import("./modules/recent/recent.module").then(m => m.RecentModule),
  },
  {
    path: "podcasts",
    loadChildren: () => import("./modules/podcasts/podcasts.module").then(m => m.PodcastsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
