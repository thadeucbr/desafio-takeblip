import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TakeblipResponseDto } from 'src/search-github/dto/takeblip-response.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/search-github (GET)', () => {
    const apiResponse: TakeblipResponseDto = {
      itemType: 'application/vnd.lime.document-select+json',
      items: [
        {
          header: {
            type: 'application/vnd.lime.media-link+json',
            value: {
              title: 'takenet/library.data',
              text: 'Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications',
              type: 'image/jpeg',
              uri: 'https://avatars.githubusercontent.com/u/4369522?v=4',
            },
          },
        },
        {
          header: {
            type: 'application/vnd.lime.media-link+json',
            value: {
              title: 'takenet/library.logging',
              text: 'Provides a simple logging interface for applications and some basic implementations of this interface',
              type: 'image/jpeg',
              uri: 'https://avatars.githubusercontent.com/u/4369522?v=4',
            },
          },
        },
        {
          header: {
            type: 'application/vnd.lime.media-link+json',
            value: {
              title: 'takenet/CorrectNumber',
              text: 'This project have the single propose of creating a simple rest service to format telephone numbers',
              type: 'image/jpeg',
              uri: 'https://avatars.githubusercontent.com/u/4369522?v=4',
            },
          },
        },
        {
          header: {
            type: 'application/vnd.lime.media-link+json',
            value: {
              title: 'takenet/libphonenumber-csharp',
              text: 'Forking original c# port',
              type: 'image/jpeg',
              uri: 'https://avatars.githubusercontent.com/u/4369522?v=4',
            },
          },
        },
        {
          header: {
            type: 'application/vnd.lime.media-link+json',
            value: {
              title: 'takenet/Takenet.Radar',
              text: 'Radar de tecnologias takenet',
              type: 'image/jpeg',
              uri: 'https://avatars.githubusercontent.com/u/4369522?v=4',
            },
          },
        },
      ],
    };

    return request(app.getHttpServer())
      .get('/search-github')
      .expect(200)
      .expect(apiResponse);
  });
});
