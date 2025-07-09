import { useAtom } from "jotai";
import { stepFormAtom } from "../register/atoms/StepForm/stepFormAtom";

export const useForm = () => {
  const [form, setForm] = useAtom(stepFormAtom);

  const set = (field: string, value: string) => {
    setForm((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return {
    form,
    events: {
      set,
    },
  };
};
