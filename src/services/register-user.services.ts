import type { IRegisterZod } from "@/screens/register/form/registerSchema.form";
import { $http } from "./clients/axios.http.client";
import { AxiosError } from "axios";

export interface User {
  name: string | null;
  id: string;
  email: string | null;
  password_hash: string | null;
  phone: string | null;
  ocupation: string | null;
  worspace: string | null;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export class SignUpServices {
  static async default(register: IRegisterZod): Promise<User> {
    try {
      const response = await $http.post<User>("/users", register);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      }

      throw new Error("Error unknown for creating user");
    }
  }
}
