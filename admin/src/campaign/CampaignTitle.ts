import { Campaign as TCampaign } from "../api/campaign/Campaign";

export const CAMPAIGN_TITLE_FIELD = "campaignName";

export const CampaignTitle = (record: TCampaign): string => {
  return record.campaignName || record.id;
};
