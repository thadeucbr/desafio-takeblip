import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { TakeblipResponseDto } from './dto/takeblip-response.dto';
import { SearchGithubController } from './search-github.controller';
import { SearchGithubService } from './search-github.service';

describe('SearchGithubController', () => {
  let controller: SearchGithubController;
  let service: SearchGithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchGithubController],
      providers: [SearchGithubService],
      imports: [HttpModule],
    }).compile();

    controller = module.get<SearchGithubController>(SearchGithubController);
    service = module.get<SearchGithubService>(SearchGithubService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(SearchGithubController).toBeDefined();
    expect(SearchGithubService).toBeDefined();
  });

  describe('getRepository', () => {
    it('should return an object with the same format of the TakeblipResponseDto', async () => {
      const mockedResponse: TakeblipResponseDto = {
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
        ],
      };

      jest
        .spyOn(service, 'getRepository')
        .mockImplementation(
          async (): Promise<TakeblipResponseDto> =>
            Promise.resolve(mockedResponse),
        );

      expect(await controller.getRepository()).toBe(mockedResponse);
    });
  });
});
