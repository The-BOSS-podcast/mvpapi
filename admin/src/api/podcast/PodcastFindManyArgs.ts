import { PodcastWhereInput } from "./PodcastWhereInput";
import { PodcastOrderByInput } from "./PodcastOrderByInput";

export type PodcastFindManyArgs = {
  where?: PodcastWhereInput;
  orderBy?: Array<PodcastOrderByInput>;
  skip?: number;
  take?: number;
};
