import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CuratedPodcastsService } from "../../services/curated-podcasts.service";
import { CuratedPlaylist } from "../../models/curated.model";

@Component({
  selector: "app-curated-playlist",
  templateUrl: "./curated-playlist.page.html",
  styleUrls: ["./curated-playlist.page.scss"],
})
export class CuratedPlaylistPage implements OnInit {

  get curatedPodcasts(): CuratedPlaylist | undefined {
    return this.curatedPodcastService.podcasts;
  }

  constructor(private route: ActivatedRoute, private curatedPodcastService: CuratedPodcastsService) {
  }

  ngOnInit(): void {
    const curatedId = this.route.snapshot.paramMap.get("curatedId") || "";
    this.curatedPodcastService.findCuratedPodcastsById(curatedId);
  }

}
