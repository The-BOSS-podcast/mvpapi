import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PodcastController } from "../podcast.controller";
import { PodcastService } from "../podcast.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  author: "exampleAuthor",
  cost: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  episodeCount: 42,
  explicit: "true",
  feedUrl: "exampleFeedUrl",
  id: "exampleId",
  imageURL: "exampleImageUrl",
  indexId: "exampleIndexId",
  itunesId: "exampleItunesId",
  lastCrawlTime: new Date(),
  lastParseTime: new Date(),
  owner: "exampleOwner",
  podcastGuid: "examplePodcastGuid",
  podcastName: "examplePodcastName",
  publisher: "examplePublisher",
  updatedAt: new Date(),
  verified: "true",
};
const CREATE_RESULT = {
  author: "exampleAuthor",
  cost: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  episodeCount: 42,
  explicit: "true",
  feedUrl: "exampleFeedUrl",
  id: "exampleId",
  imageURL: "exampleImageUrl",
  indexId: "exampleIndexId",
  itunesId: "exampleItunesId",
  lastCrawlTime: new Date(),
  lastParseTime: new Date(),
  owner: "exampleOwner",
  podcastGuid: "examplePodcastGuid",
  podcastName: "examplePodcastName",
  publisher: "examplePublisher",
  updatedAt: new Date(),
  verified: "true",
};
const FIND_MANY_RESULT = [
  {
    author: "exampleAuthor",
    cost: 42,
    createdAt: new Date(),
    description: "exampleDescription",
    episodeCount: 42,
    explicit: "true",
    feedUrl: "exampleFeedUrl",
    id: "exampleId",
    imageURL: "exampleImageUrl",
    indexId: "exampleIndexId",
    itunesId: "exampleItunesId",
    lastCrawlTime: new Date(),
    lastParseTime: new Date(),
    owner: "exampleOwner",
    podcastGuid: "examplePodcastGuid",
    podcastName: "examplePodcastName",
    publisher: "examplePublisher",
    updatedAt: new Date(),
    verified: "true",
  },
];
const FIND_ONE_RESULT = {
  author: "exampleAuthor",
  cost: 42,
  createdAt: new Date(),
  description: "exampleDescription",
  episodeCount: 42,
  explicit: "true",
  feedUrl: "exampleFeedUrl",
  id: "exampleId",
  imageURL: "exampleImageUrl",
  indexId: "exampleIndexId",
  itunesId: "exampleItunesId",
  lastCrawlTime: new Date(),
  lastParseTime: new Date(),
  owner: "exampleOwner",
  podcastGuid: "examplePodcastGuid",
  podcastName: "examplePodcastName",
  publisher: "examplePublisher",
  updatedAt: new Date(),
  verified: "true",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Podcast", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PodcastService,
          useValue: service,
        },
      ],
      controllers: [PodcastController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /podcasts", async () => {
    await request(app.getHttpServer())
      .post("/podcasts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastCrawlTime: CREATE_RESULT.lastCrawlTime.toISOString(),
        lastParseTime: CREATE_RESULT.lastParseTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /podcasts", async () => {
    await request(app.getHttpServer())
      .get("/podcasts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastCrawlTime: FIND_MANY_RESULT[0].lastCrawlTime.toISOString(),
          lastParseTime: FIND_MANY_RESULT[0].lastParseTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /podcasts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/podcasts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /podcasts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/podcasts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastCrawlTime: FIND_ONE_RESULT.lastCrawlTime.toISOString(),
        lastParseTime: FIND_ONE_RESULT.lastParseTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /podcasts existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/podcasts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastCrawlTime: CREATE_RESULT.lastCrawlTime.toISOString(),
        lastParseTime: CREATE_RESULT.lastParseTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/podcasts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
