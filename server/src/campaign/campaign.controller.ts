import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CampaignService } from "./campaign.service";
import { CampaignControllerBase } from "./base/campaign.controller.base";

@swagger.ApiTags("campaigns")
@common.Controller("campaigns")
export class CampaignController extends CampaignControllerBase {
  constructor(
    protected readonly service: CampaignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
