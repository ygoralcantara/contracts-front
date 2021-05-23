export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
}

export interface CreateUserBody {
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  statusCode: number;
  message: string;
  data: User;
}
