import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GithubResponseDto } from './dto/github-response.dto';
import { TakeblipResponseDto } from './dto/takeblip-response.dto';

@Injectable()
export class SearchGithubService {
  constructor(private readonly httpService: HttpService) {}

  async getRepository() {
    const githubResponse = (
      await this.httpService.axiosRef.get(
        'https://api.github.com/orgs/takenet/repos?language=c%23&sort=created_at&direction=asc&per_page=5',
      )
    ).data as GithubResponseDto[];

    const takeBlipResponseFormat = {
      itemType: 'application/vnd.lime.document-select+json',
      items: [],
    };

    githubResponse.forEach((repository) =>
      takeBlipResponseFormat.items.push({
        header: {
          type: 'application/vnd.lime.media-link+json',
          value: {
            title: repository.full_name,
            text: repository.description,
            type: 'image/jpeg',
            uri: repository.owner.avatar_url,
          },
        },
      }),
    );

    return takeBlipResponseFormat as TakeblipResponseDto;
  }
}
