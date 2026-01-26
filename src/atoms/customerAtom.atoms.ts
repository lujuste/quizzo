import { atom } from "jotai";
import type { User } from "@/services/register-user.services";

export const customerAtom = atom<User | object>({});
export const loadingAtom = atom<boolean>(true);
export const activeLoginAtom = atom<boolean>(false);
