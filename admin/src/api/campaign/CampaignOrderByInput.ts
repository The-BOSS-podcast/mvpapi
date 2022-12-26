import { SortOrder } from "../../util/SortOrder";

export type CampaignOrderByInput = {
  associatedCampaigns?: SortOrder;
  associatedSocials?: SortOrder;
  camapignBrief?: SortOrder;
  campaignCost?: SortOrder;
  campaignName?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
