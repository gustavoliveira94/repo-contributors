import { HttpResponse } from './httpResponse';

export type HttpPostParams = {
  url: string;
  method: 'POST';
  data?: object;
};

export interface HttpPostClient {
  post<T>(params: HttpPostParams): Promise<HttpResponse<T>>;
}
