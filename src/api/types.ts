export interface ApiParams {
  method: 'GET' | 'POST' | 'PUT',
  url: string,
  body?: any,
  headers?: any,
  withCredentials?: boolean
}

