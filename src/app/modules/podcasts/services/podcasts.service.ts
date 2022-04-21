import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Podcast } from "../models/podcast.model";
import { environment } from "../../../../environments/environment";

const { listenNotesAPI: { baseURL } } = environment;

@Injectable({
  providedIn: "root",
})
export class PodcastsService {

  constructor(private http: HttpClient) {
  }

  findById(podcastId: string): Observable<Podcast> {
    return this.http.get<Podcast>(`${baseURL}/podcasts/${podcastId}`);
  }
}
