import axiosRequest, { AxiosResponse } from 'axios';

import { api } from 'data/services/api';

import {
  HttpPostParams,
  HttpPostClient,
} from 'data/protocols/http/httpPostClient';
import {
  HttpGetClient,
  HttpGetParams,
} from 'data/protocols/http/httpGetClient';

import { HttpResponse } from 'data/protocols/http/httpResponse';

type ResponseHttpClient = HttpPostClient & HttpGetClient;

const axios = axiosRequest.create({ baseURL: api });

export const AxiosHttpClient = (): ResponseHttpClient => ({
  post: async (params: HttpPostParams): Promise<HttpResponse> => {
    const httpResponse = await axios(params);

    return {
      statusCode: httpResponse.status,
      data: httpResponse.data,
    };
  },
  get: async (params: HttpGetParams): Promise<HttpResponse> => {
    let response: AxiosResponse;

    try {
      response = await axios(params);

      return {
        statusCode: response.status,
        data: response.data,
      };
    } catch (error: any) {
      response = error.response;
    }

    return {
      statusCode: response.status,
      data: response.data,
    };
  },
});

const { get, post } = AxiosHttpClient();

export { get, post };
