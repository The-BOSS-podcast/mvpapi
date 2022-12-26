import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CampaignServiceBase } from "./base/campaign.service.base";

@Injectable()
export class CampaignService extends CampaignServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
