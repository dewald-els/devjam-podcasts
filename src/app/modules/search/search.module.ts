import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchPage } from "./pages/search/search.page";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';


@NgModule({
  declarations: [
    SearchPage,
    SearchResultListComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    SharedModule,
  ],
})
export class SearchModule {
}
