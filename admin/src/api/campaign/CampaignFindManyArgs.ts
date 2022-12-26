import { CampaignWhereInput } from "./CampaignWhereInput";
import { CampaignOrderByInput } from "./CampaignOrderByInput";

export type CampaignFindManyArgs = {
  where?: CampaignWhereInput;
  orderBy?: Array<CampaignOrderByInput>;
  skip?: number;
  take?: number;
};
