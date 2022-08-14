import { HttpResponse } from './httpResponse';

export type HttpGetParams = {
  url: string;
  method?: 'GET';
};

export interface HttpGetClient {
  get<T>(params: HttpGetParams): Promise<HttpResponse<T>>;
}
