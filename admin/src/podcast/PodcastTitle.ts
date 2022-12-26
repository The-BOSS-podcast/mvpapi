import { Podcast as TPodcast } from "../api/podcast/Podcast";

export const PODCAST_TITLE_FIELD = "podcastName";

export const PodcastTitle = (record: TPodcast): string => {
  return record.podcastName || record.id;
};
