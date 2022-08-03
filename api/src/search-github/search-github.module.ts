import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SearchGithubController } from './search-github.controller';
import { SearchGithubService } from './search-github.service';

@Module({
  imports: [HttpModule],
  controllers: [SearchGithubController],
  providers: [SearchGithubService],
})
export class SearchGithubModule {}
