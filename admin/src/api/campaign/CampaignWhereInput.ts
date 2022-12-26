import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CampaignWhereInput = {
  associatedCampaigns?: StringNullableFilter;
  associatedSocials?: StringNullableFilter;
  camapignBrief?: StringNullableFilter;
  campaignCost?: StringNullableFilter;
  campaignName?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
