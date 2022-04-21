import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { FoldTextPipe } from "./pipes/fold-text.pipe";


@NgModule({
  declarations: [
    SidebarComponent,
    FoldTextPipe,
  ],
  exports: [
    SidebarComponent,
    FoldTextPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class SharedModule {
}
