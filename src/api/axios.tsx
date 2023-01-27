import axios from 'axios';

export type requestTypes = {
  page: string | null;
  data: any;
  accessToken: string | null;
};

export default class RequestAPI {
  httpClient: any;
  constructor({ page, data, accessToken }: requestTypes) {
    this.httpClient = axios.create({
      baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api',
      params: {
        'content-type': 'application/json',
        username: 'KDT3_TEAM_NXLL',
        apikey: import.meta.env.VITE_API_KEY,
        masterKey: page === 'admin' ? true : false,
        Authorization: accessToken ? `Bearer ${accessToken}` : null,
      },
      data: data ? data : null,
    });
  }

  async auth(params: any) {
    return this.httpClient.get('auth', params);
  }

  async videos(params: any) {
    return this.httpClient.get('search', params);
  }

  async channels(params: any) {
    return this.httpClient.get('search', params);
  }
}
