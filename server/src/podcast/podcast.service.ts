import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PodcastServiceBase } from "./base/podcast.service.base";

@Injectable()
export class PodcastService extends PodcastServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
