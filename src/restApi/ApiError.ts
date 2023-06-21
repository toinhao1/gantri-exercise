export class ApiError extends Error {
  code = 400;
  message = '';
  type = 'ApiError';

  constructor(message: string, code?: number, type?: string) {
    super(message);

    this.message = message;
    this.type = type;
    if (typeof code === 'number') this.code = code;
  }
}
