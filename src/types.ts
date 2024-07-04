export interface VansType {
    description: string;
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    type: string;
  }
  
export type FormType = {
  email: string;
  password: string;
}

export type ErrorType = {
  message: string;
  name: string;
  stack?: string;
};

export type LoginErrorType = {
  message: string;
  statusText: string;
  status: string;
}