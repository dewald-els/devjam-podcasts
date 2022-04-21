import { Episode } from "./episode.model";

export interface Podcast {
  id: string;
  image: string;
  description: string;
  listen_score: number;
  listen_score_global_rank: string;
  publisher: string;
  thumbnail: string;
  title: string;
  rss: string;
  type: string;
  email: string;
  country: string;
  website: string;
  language: string;
  is_claimed: string;
  next_episode_pub_date: string;
  total_episodes: number;
  genre_ids: number[];
  extra: PodcastExtra;
  episodes: Episode[];
}

interface PodcastExtra {
  url1: string;
  google_url: string;
  spotify_url: string;
  youtube_url: string;
  patreon_handle: string;
  twitter_handle: string;
  facebook_handle: string;
  instagram_handle: string;
}
