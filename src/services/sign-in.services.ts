import type { IRegisterZod } from "@/screens/register/form/registerSchema.form";
import { $http } from "./clients/axios.http.client";
import { AxiosError } from "axios";

interface IToken {
  token: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export class SignInService {
  static async default({ email, password }: ISignIn): Promise<IToken> {
    try {
      const response = await $http.post<IToken>("/sessions", {
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      }

      throw new Error("Error unknown for creating user");
    }
  }
  static async google({ email, password }: ISignIn): Promise<IToken> {
    try {
      const response = await $http.post<IToken>("/session", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      }

      throw new Error("Error unknown for creating user");
    }
  }
}
