import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PodcastResolverBase } from "./base/podcast.resolver.base";
import { Podcast } from "./base/Podcast";
import { PodcastService } from "./podcast.service";

@graphql.Resolver(() => Podcast)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PodcastResolver extends PodcastResolverBase {
  constructor(
    protected readonly service: PodcastService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
