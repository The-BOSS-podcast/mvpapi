import { Podcast as TPodcast } from "../api/podcast/Podcast";

export const PODCAST_TITLE_FIELD = "id";

export const PodcastTitle = (record: TPodcast): string => {
  return record.id || record.id;
};
