/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeletePodcastArgs } from "./DeletePodcastArgs";
import { PodcastFindManyArgs } from "./PodcastFindManyArgs";
import { PodcastFindUniqueArgs } from "./PodcastFindUniqueArgs";
import { Podcast } from "./Podcast";
import { PodcastService } from "../podcast.service";

@graphql.Resolver(() => Podcast)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PodcastResolverBase {
  constructor(
    protected readonly service: PodcastService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Podcast",
    action: "read",
    possession: "any",
  })
  async _podcastsMeta(
    @graphql.Args() args: PodcastFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Podcast])
  @nestAccessControl.UseRoles({
    resource: "Podcast",
    action: "read",
    possession: "any",
  })
  async podcasts(
    @graphql.Args() args: PodcastFindManyArgs
  ): Promise<Podcast[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Podcast, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Podcast",
    action: "read",
    possession: "own",
  })
  async podcast(
    @graphql.Args() args: PodcastFindUniqueArgs
  ): Promise<Podcast | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Podcast)
  @nestAccessControl.UseRoles({
    resource: "Podcast",
    action: "delete",
    possession: "any",
  })
  async deletePodcast(
    @graphql.Args() args: DeletePodcastArgs
  ): Promise<Podcast | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
