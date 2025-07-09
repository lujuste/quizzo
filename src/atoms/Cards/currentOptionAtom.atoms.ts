import { atom } from "jotai";
import { prospectUser } from "@/screens/register/constants/onBoardingRegister.constants";
import type { WritableAtom } from "jotai/ts3.8/vanilla";

export type Occupation = (typeof prospectUser.occupation)[number];

export const currentOption: WritableAtom<
  Occupation | null,
  [Occupation],
  void
> = atom(null, (_get, set, newValue) => {
  set(currentOption, newValue);
});
