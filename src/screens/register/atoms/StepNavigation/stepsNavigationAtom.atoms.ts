import { atom } from "jotai";

export enum PagesEnum {
  OCUPATION = "ocupation",
  WORKSPACE = "workspace",
  CREDENTIALS = "credentials",
  FINISH_CREDENTIALS = "finishCredentials",
}

export interface NavigationState {
  page: PagesEnum;
}

export const navigationHistoryAtom = atom<NavigationState[]>([
  { page: PagesEnum.CREDENTIALS },
]);

export const buttonStep = atom(false);
