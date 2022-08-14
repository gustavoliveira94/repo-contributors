import { get } from 'infra/http/axiosHttpClient';

import { HttpStatusCode } from 'data/protocols/http/httpStatusCode';
import { HttpResponse } from 'data/protocols/http/httpResponse';

import { IContributors } from 'domain/usecases/contributors/contributors';

export interface contributorsProps {
  repository: string;
  owner: string;
}

export const contributors = async ({
  repository,
  owner,
}: contributorsProps): Promise<HttpResponse<IContributors>> => {
  const { statusCode, data } = await get<IContributors>({
    url: `/repos/${owner}/${repository}/contributors`,
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
        data: [],
      };
  }
};
