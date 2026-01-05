import { atom } from "jotai";

type FormProps = {
  ocupation: string;
  workspace: string;
};

export type CredentialFormFields = "country" | "dateBirthday";

export const stepFormAtom = atom<FormProps>({
  ocupation: "",
  workspace: "",
});

export const CredentialForm = atom<CredentialFormFields>("dateBirthday");
