import { atom } from "jotai";

type FormProps = {
  ocupation: string;
  workspace: string;
};

export const stepFormAtom = atom<FormProps>({
  ocupation: "",
  workspace: "",
});
