import { Podcast } from "../../podcasts/models/podcast.model";

export interface SearchResultResponse {
  took: number;
  count: number;
  total: number;
  results: SearchResult[];
  next_offset: number;
}

export interface SearchResult {
  audio: string;
  audio_length_sec: number;
  description_highlighted: string;
  description_original: string;
  explicit_content: boolean;
  id: string;
  image: string;
  itunes_id: number;
  link: string;
  listennotes_url: string;
  podcast: Podcast;
  pub_date_ms: number;
  rss: string;
  thumbnail: string;
  title_highlighted: string;
  title_original: string;
  transcripts_highlighted: any[];
}
