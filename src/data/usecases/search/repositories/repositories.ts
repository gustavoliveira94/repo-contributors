import { get } from 'infra/http/axiosHttpClient';

import { HttpStatusCode } from 'data/protocols/http/httpStatusCode';
import { HttpResponse } from 'data/protocols/http/httpResponse';

import { IallRepositories } from 'domain/usecases/repositories/allRepositories';

export interface allRepositoriesProps {
  name: string;
  page: number;
}

export const allRepositories = async ({
  name,
  page = 1,
}: allRepositoriesProps): Promise<HttpResponse<IallRepositories>> => {
  const { statusCode, data } = await get<IallRepositories>({
    url: `/search/repositories?q=${name}&in:name&per_page=100&page=${page}`,
  });

  switch (statusCode) {
    case HttpStatusCode.success:
      return {
        statusCode,
        data,
      };
    default:
      return {
        statusCode,
        data: {
          total_count: 0,
          incomplete_results: true,
          items: [],
        },
      };
  }
};
