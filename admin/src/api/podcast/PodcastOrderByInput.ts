import { SortOrder } from "../../util/SortOrder";

export type PodcastOrderByInput = {
  author?: SortOrder;
  categories?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  episodeCount?: SortOrder;
  explicit?: SortOrder;
  feedUrl?: SortOrder;
  id?: SortOrder;
  imageURL?: SortOrder;
  indexId?: SortOrder;
  itunesId?: SortOrder;
  language?: SortOrder;
  lastCrawlTime?: SortOrder;
  lastParseTime?: SortOrder;
  owner?: SortOrder;
  podcastGuid?: SortOrder;
  podcastName?: SortOrder;
  publisher?: SortOrder;
  updatedAt?: SortOrder;
  verified?: SortOrder;
};
