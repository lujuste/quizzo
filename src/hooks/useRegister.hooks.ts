import {
  prospectUserAtom,
  type IProspectUser,
} from "@/atoms/prospectUserAtom.atoms";
import { useAtom } from "jotai";

export const useRegister = () => {
  const [prospect, setProspect] = useAtom(prospectUserAtom);

  const handleUpdateProspect = (updatedFields: Partial<IProspectUser>) => {
    setProspect((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };
  return {
    prospect,
    handleUpdateProspect,
  };
};
