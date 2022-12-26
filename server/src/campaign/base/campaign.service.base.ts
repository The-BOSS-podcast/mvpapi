/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Campaign } from "@prisma/client";

export class CampaignServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CampaignFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignFindManyArgs>
  ): Promise<number> {
    return this.prisma.campaign.count(args);
  }

  async findMany<T extends Prisma.CampaignFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignFindManyArgs>
  ): Promise<Campaign[]> {
    return this.prisma.campaign.findMany(args);
  }
  async findOne<T extends Prisma.CampaignFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignFindUniqueArgs>
  ): Promise<Campaign | null> {
    return this.prisma.campaign.findUnique(args);
  }
  async create<T extends Prisma.CampaignCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignCreateArgs>
  ): Promise<Campaign> {
    return this.prisma.campaign.create<T>(args);
  }
  async update<T extends Prisma.CampaignUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignUpdateArgs>
  ): Promise<Campaign> {
    return this.prisma.campaign.update<T>(args);
  }
  async delete<T extends Prisma.CampaignDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignDeleteArgs>
  ): Promise<Campaign> {
    return this.prisma.campaign.delete(args);
  }
}