import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PodcastService } from "./podcast.service";
import { PodcastControllerBase } from "./base/podcast.controller.base";

@swagger.ApiTags("podcasts")
@common.Controller("podcasts")
export class PodcastController extends PodcastControllerBase {
  constructor(
    protected readonly service: PodcastService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
