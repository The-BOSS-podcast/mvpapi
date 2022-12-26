import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CampaignResolverBase } from "./base/campaign.resolver.base";
import { Campaign } from "./base/Campaign";
import { CampaignService } from "./campaign.service";

@graphql.Resolver(() => Campaign)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CampaignResolver extends CampaignResolverBase {
  constructor(
    protected readonly service: CampaignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
