import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, ActivationStart } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {

  public path: string = "";

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
      )
      .subscribe({
        next: (event: any) => {
          this.path = event.url;
        },
      });
  }

}
