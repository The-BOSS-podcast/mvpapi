import { Campaign as TCampaign } from "../api/campaign/Campaign";

export const CAMPAIGN_TITLE_FIELD = "id";

export const CampaignTitle = (record: TCampaign): string => {
  return record.id || record.id;
};
