export interface BaseApiResponse<T> {
  response: {
    code: number;
    data: T;
    message: string;
    status: boolean;
  };
}
