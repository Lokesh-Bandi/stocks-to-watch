import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from 'axios';

import { consoleError } from '../Error/consoleError';
import { ErrorTypes } from '../Error/types';

class FetcherRoot {
  private static instance: FetcherRoot;
  private cache: Record<
    string,
    { time: number; payload: AxiosResponse['data'] }
  > = {};
  private SUCCESS_STATUS_CODE = 200;
  private SUCCESS_STATUS_CODE_POST = 201;

  public static getInstance(): FetcherRoot {
    if (!this.instance) {
      this.instance = new FetcherRoot();
    }
    return this.instance;
  }

  public getEndpoint(url: string) {
    try {
      return new URL(url).pathname;
    } catch {
      return url.split('?')[0];
    }
  }
  public get<P>(
    url: string,
    baseUrl?: string,
    params?: Record<string, unknown>
  ): Promise<P> {
    let originalUrl = url;
    if (baseUrl) {
      originalUrl = baseUrl + originalUrl;
    }
    if (this.cache[originalUrl]) {
      return this.cache[originalUrl].payload as Promise<P>;
    }
    this.cache[originalUrl] = {
      time: Date.now(),
      payload: axios
        .get<AxiosResponse>(originalUrl, { params })
        .then((response: AxiosResponse) => {
          const endPoint = this.getEndpoint(originalUrl);
          const status = response.status;
          const statusText = response.statusText;
          const data = response.data;
          if (status !== this.SUCCESS_STATUS_CODE) {
            throw new Error(
              `⚠ Error ${status}: ${statusText} while fetching ${endPoint}`
            );
          }
          return data;
        })
        .catch((e: AxiosError | Error) => {
          const endPoint = this.getEndpoint(originalUrl);
          const errorMessage = `${e.message} while fetching ${endPoint}`;
          if (isAxiosError(e)) {
            consoleError(ErrorTypes.axios, e.code, errorMessage);
          } else {
            consoleError(ErrorTypes.fetch, undefined, errorMessage);
          }
        }),
    };
    return this.cache[originalUrl].payload as Promise<P>;
  }
  public post<P>(
    url: string,
    data: unknown,
    baseUrl?: string,
    config?: AxiosRequestConfig
  ) {
    let originalUrl = url;
    if (baseUrl) {
      originalUrl = baseUrl + originalUrl;
    }
    const postResponse = axios
      .post<AxiosResponse>(originalUrl, data, config)
      .then((response: AxiosResponse) => {
        const endPoint = this.getEndpoint(originalUrl);
        const status = response.status;
        const statusText = response.statusText;
        if (status !== this.SUCCESS_STATUS_CODE_POST) {
          throw new Error(
            `⚠ Error ${status}: ${statusText} while posting ${endPoint}`
          );
        }
        return response.data;
      })
      .catch((e: AxiosError | Error) => {
        const endPoint = this.getEndpoint(originalUrl);
        const errorMessage = `${e.message} while posting ${endPoint}`;
        if (isAxiosError(e)) {
          consoleError(ErrorTypes.axios, e.code, errorMessage);
        } else {
          consoleError(ErrorTypes.fetch, undefined, errorMessage);
        }
      });
    return postResponse as Promise<P>;
  }
}
export const Fetcher = FetcherRoot.getInstance();
