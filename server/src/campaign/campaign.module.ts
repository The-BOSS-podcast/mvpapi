import { Module } from "@nestjs/common";
import { CampaignModuleBase } from "./base/campaign.module.base";
import { CampaignService } from "./campaign.service";
import { CampaignController } from "./campaign.controller";
import { CampaignResolver } from "./campaign.resolver";

@Module({
  imports: [CampaignModuleBase],
  controllers: [CampaignController],
  providers: [CampaignService, CampaignResolver],
  exports: [CampaignService],
})
export class CampaignModule {}
