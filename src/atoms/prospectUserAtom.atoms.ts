import { atom } from "jotai";

export type IProspectUser = {
  ocupation: string;
  workspace: string;
  fullName: string;
  birthdate: string;
  country: string;
  phone: string;
  email: string;
  password: string;
};

export const prospectUserAtom = atom<IProspectUser>({
  ocupation: "",
  workspace: "",
  fullName: "",
  birthdate: "",
  country: "",
  phone: "",
  email: "",
  password: "",
});
