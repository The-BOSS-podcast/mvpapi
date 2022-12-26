import { PodcastWhereUniqueInput } from "./PodcastWhereUniqueInput";
import { PodcastUpdateInput } from "./PodcastUpdateInput";

export type UpdatePodcastArgs = {
  where: PodcastWhereUniqueInput;
  data: PodcastUpdateInput;
};
