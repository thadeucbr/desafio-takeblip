import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchGithubService } from './search-github.service';

@ApiTags('Search GitHub')
@Controller('search-github')
export class SearchGithubController {
  constructor(private readonly searchGithubService: SearchGithubService) {}

  @Get()
  async getRepository() {
    return this.searchGithubService.getRepository();
  }
}
