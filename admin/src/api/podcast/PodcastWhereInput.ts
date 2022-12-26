import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PodcastWhereInput = {
  author?: StringNullableFilter;
  categories?: JsonFilter;
  cost?: IntNullableFilter;
  description?: StringNullableFilter;
  episodeCount?: IntNullableFilter;
  explicit?: BooleanNullableFilter;
  feedUrl?: StringNullableFilter;
  id?: StringFilter;
  imageURL?: StringNullableFilter;
  indexId?: StringNullableFilter;
  itunesId?: StringNullableFilter;
  lastCrawlTime?: DateTimeNullableFilter;
  lastParseTime?: DateTimeNullableFilter;
  owner?: StringNullableFilter;
  podcastGuid?: StringNullableFilter;
  podcastName?: StringNullableFilter;
  publisher?: StringNullableFilter;
  verified?: BooleanNullableFilter;
};
