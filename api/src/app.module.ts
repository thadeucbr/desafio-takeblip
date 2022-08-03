import { Module } from '@nestjs/common';
import { SearchGithubModule } from './search-github/search-github.module';

@Module({
  imports: [SearchGithubModule],
})
export class AppModule {}
