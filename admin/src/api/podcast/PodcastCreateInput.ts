import { InputJsonValue } from "../../types";

export type PodcastCreateInput = {
  author?: string | null;
  categories?: InputJsonValue;
  cost?: number | null;
  description?: string | null;
  episodeCount?: number | null;
  explicit?: boolean | null;
  feedUrl?: string | null;
  imageURL?: string | null;
  indexId?: string | null;
  itunesId?: string | null;
  language?: Array<"English" | "Hindi" | "Telgu">;
  lastCrawlTime?: Date | null;
  lastParseTime?: Date | null;
  owner?: string | null;
  podcastGuid?: string | null;
  podcastName?: string | null;
  publisher?: string | null;
  verified?: boolean | null;
};
