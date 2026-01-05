import { atom } from "jotai";

export enum PagesEnum {
  OCUPATION = "ocupation",
  WORKSPACE = "workspace",
  CREDENTIALS = "credentials",
  FINISH_CREDENTIALS = "finishRegister",
}

export interface NavigationState {
  page: PagesEnum;
}

export const navigationHistoryAtom = atom<NavigationState[]>([
  { page: PagesEnum.OCUPATION },
]);

export const buttonStep = atom(false);
