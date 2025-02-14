export interface IGreetOptions {
  message: string;
  times: number;
}

export function greet({ message }: IGreetOptions) {
  console.info(message);
}
