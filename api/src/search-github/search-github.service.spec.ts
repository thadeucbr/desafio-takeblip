import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { TakeblipResponseDto } from './dto/takeblip-response.dto';
import { SearchGithubService } from './search-github.service';

describe('SearchGithubService', () => {
  let service: SearchGithubService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchGithubService],
      imports: [HttpModule],
    }).compile();

    service = module.get<SearchGithubService>(SearchGithubService);
    httpService = module.get<HttpService>(HttpService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRepository', () => {
    it('should return an object formatted like the TakeblipResponseDto', async () => {
      const mockAxiosResponse = {
        data: [
          {
            id: 13860708,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzg2MDcwOA==',
            name: 'library.data',
            full_name: 'takenet/library.data',
            private: false,
            owner: {
              login: 'takenet',
              id: 4369522,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjQzNjk1MjI=',
              avatar_url: 'https://avatars.githubusercontent.com/u/4369522?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/takenet',
              html_url: 'https://github.com/takenet',
              followers_url: 'https://api.github.com/users/takenet/followers',
              following_url:
                'https://api.github.com/users/takenet/following{/other_user}',
              gists_url: 'https://api.github.com/users/takenet/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/takenet/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/takenet/subscriptions',
              organizations_url: 'https://api.github.com/users/takenet/orgs',
              repos_url: 'https://api.github.com/users/takenet/repos',
              events_url:
                'https://api.github.com/users/takenet/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/takenet/received_events',
              type: 'Organization',
              site_admin: false,
            },
            html_url: 'https://github.com/takenet/library.data',
            description:
              'Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications',
            fork: false,
            url: 'https://api.github.com/repos/takenet/library.data',
            forks_url:
              'https://api.github.com/repos/takenet/library.data/forks',
            keys_url:
              'https://api.github.com/repos/takenet/library.data/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/takenet/library.data/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/takenet/library.data/teams',
            hooks_url:
              'https://api.github.com/repos/takenet/library.data/hooks',
            issue_events_url:
              'https://api.github.com/repos/takenet/library.data/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/takenet/library.data/events',
            assignees_url:
              'https://api.github.com/repos/takenet/library.data/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/takenet/library.data/branches{/branch}',
            tags_url: 'https://api.github.com/repos/takenet/library.data/tags',
            blobs_url:
              'https://api.github.com/repos/takenet/library.data/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/takenet/library.data/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/takenet/library.data/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/takenet/library.data/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/takenet/library.data/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/takenet/library.data/languages',
            stargazers_url:
              'https://api.github.com/repos/takenet/library.data/stargazers',
            contributors_url:
              'https://api.github.com/repos/takenet/library.data/contributors',
            subscribers_url:
              'https://api.github.com/repos/takenet/library.data/subscribers',
            subscription_url:
              'https://api.github.com/repos/takenet/library.data/subscription',
            commits_url:
              'https://api.github.com/repos/takenet/library.data/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/takenet/library.data/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/takenet/library.data/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/takenet/library.data/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/takenet/library.data/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/takenet/library.data/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/takenet/library.data/merges',
            archive_url:
              'https://api.github.com/repos/takenet/library.data/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/takenet/library.data/downloads',
            issues_url:
              'https://api.github.com/repos/takenet/library.data/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/takenet/library.data/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/takenet/library.data/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/takenet/library.data/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/takenet/library.data/labels{/name}',
            releases_url:
              'https://api.github.com/repos/takenet/library.data/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/takenet/library.data/deployments',
            created_at: '2013-10-25T13:04:51Z',
            updated_at: '2021-07-14T17:21:19Z',
            pushed_at: '2013-10-25T16:09:45Z',
            git_url: 'git://github.com/takenet/library.data.git',
            ssh_url: 'git@github.com:takenet/library.data.git',
            clone_url: 'https://github.com/takenet/library.data.git',
            svn_url: 'https://github.com/takenet/library.data',
            homepage: null,
            size: 9364,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'C#',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: true,
            disabled: false,
            open_issues_count: 0,
            license: {
              key: 'gpl-2.0',
              name: 'GNU General Public License v2.0',
              spdx_id: 'GPL-2.0',
              url: 'https://api.github.com/licenses/gpl-2.0',
              node_id: 'MDc6TGljZW5zZTg=',
            },
            allow_forking: true,
            is_template: false,
            web_commit_signoff_required: false,
            topics: [],
            visibility: 'public',
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
            permissions: {
              admin: false,
              maintain: false,
              push: false,
              triage: false,
              pull: true,
            },
          },
        ],
      };

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
        .spyOn(httpService.axiosRef, 'get')
        .mockImplementation(async () => Promise.resolve(mockAxiosResponse));

      expect(await service.getRepository()).toStrictEqual(mockedResponse);
    });
  });
});
