import { Podcast } from "../../podcasts/models/podcast.model";

export interface CuratedPlaylist {
  id: string;
  description: string;
  listennotes_url: string;
  pub_date_ms: number;
  source_domain: string;
  podcasts: Podcast[];
  source_url: string;
  title: string;
}
