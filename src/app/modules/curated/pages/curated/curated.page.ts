import { Component, OnInit } from "@angular/core";
import { CuratedService } from "../../services/curated.service";
import { CuratedPlaylist } from "../../models/curated.model";

@Component({
  selector: "app-curated",
  templateUrl: "./curated.page.html",
  styleUrls: ["./curated.page.scss"],
})
export class CuratedPage implements OnInit {

  get curated(): CuratedPlaylist[] {
    return this.curatedService.curated;
  }

  constructor(private curatedService: CuratedService) {
  }

  ngOnInit(): void {
    this.curatedService.findAll();
  }

}
