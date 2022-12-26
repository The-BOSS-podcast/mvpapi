import { Module } from "@nestjs/common";
import { PodcastModuleBase } from "./base/podcast.module.base";
import { PodcastService } from "./podcast.service";
import { PodcastController } from "./podcast.controller";
import { PodcastResolver } from "./podcast.resolver";

@Module({
  imports: [PodcastModuleBase],
  controllers: [PodcastController],
  providers: [PodcastService, PodcastResolver],
  exports: [PodcastService],
})
export class PodcastModule {}
