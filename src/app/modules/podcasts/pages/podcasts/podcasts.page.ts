import { Component, OnInit } from "@angular/core";
import { Podcast } from "../../models/podcast.model";
import { PodcastsService } from "../../services/podcasts.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Episode } from "../../models/episode.model";

@Component({
  selector: "app-podcasts",
  templateUrl: "./podcasts.page.html",
  styleUrls: ["./podcasts.page.scss"],
})
export class PodcastsPage implements OnInit {

  public podcast?: Podcast;
  public loading: boolean = true;
  public error: string = "";

  public currentlyPlaying: Episode | null = null;
  public audio: HTMLAudioElement | null = null;
  public loadingTrack: boolean = false;

  constructor(private route: ActivatedRoute, private podcastService: PodcastsService) {
  }

  ngOnInit(): void {
    const podcastId = this.route.snapshot.paramMap.get("podcastId") || "";
    this.podcastService.findById(podcastId).subscribe({
      next: (podcast: Podcast) => {
        this.podcast = podcast;
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.message;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  public async playEpisode(episode: Episode): Promise<void> {

    if (this.audio !== null && this.currentlyPlaying !== null && episode.id === this.currentlyPlaying.id) {
      if (this.currentlyPlaying.is_playing) {
        this.audio.pause();
        this.currentlyPlaying.is_playing = false;
      } else {
        await this.audio.play();
        this.currentlyPlaying.is_playing = true;
      }
      return;
    }

    if (this.audio !== null && this.currentlyPlaying !== null) {
      this.audio.pause();
      this.audio = null;
      this.currentlyPlaying.is_playing = false;
      this.currentlyPlaying = null;
    }

    try {
      this.loadingTrack = true;
      this.audio = new Audio(episode.audio);
      this.audio.addEventListener("playing", () => {
        episode.is_playing = true;
        this.currentlyPlaying = episode;
      });
      await this.audio.play();
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingTrack = false;
    }
  }

}
