export interface Token {
  access_token: string;
}

export interface AuthLoginBody {
  username: string;
  password: string;
}

export interface AuthLoginResponse {
  statusCode: number;
  message: string;
  data: Token;
}
