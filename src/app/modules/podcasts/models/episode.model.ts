export interface Episode {
  id: string;
  link: string;
  audio: string;
  image: string;
  title: string;
  thumbnail: string;
  description: string;
  pub_date_ms: number;
  listennotes_url: string;
  explicit_content: string;
  maybe_audio_invalid: boolean;
  is_playing: boolean;
  audio_length_sec: number;
}
