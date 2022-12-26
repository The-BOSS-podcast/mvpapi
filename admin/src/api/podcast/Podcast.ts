import { JsonValue } from "type-fest";

export type Podcast = {
  author: string | null;
  categories: JsonValue;
  cost: number | null;
  createdAt: Date;
  description: string | null;
  episodeCount: number | null;
  explicit: boolean | null;
  feedUrl: string | null;
  id: string;
  imageURL: string | null;
  indexId: string | null;
  itunesId: string | null;
  language?: Array<"English" | "Hindi" | "Telgu">;
  lastCrawlTime: Date | null;
  lastParseTime: Date | null;
  owner: string | null;
  podcastGuid: string | null;
  podcastName: string | null;
  publisher: string | null;
  updatedAt: Date;
  verified: boolean | null;
};
