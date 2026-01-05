import { stepFormAtom } from "@/screens/register/atoms/StepForm/stepFormAtom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useForm as useRHF, useWatch, type PathValue } from "react-hook-form";
import type { ZodObject } from "zod";
import { z } from "zod";

type Props<T extends ZodObject, K extends keyof z.infer<T>> = {
  schema: T;
  field: K;
};

export const useStepForm = <T extends ZodObject, K extends keyof z.infer<T>>({
  schema,
  field,
}: Props<T, K>) => {
  const [form, setForm] = useAtom(stepFormAtom);

  const setField = (value: z.infer<T>[K]) => {
    setForm((prev) => ({
      ...prev,
      [field as string]: value,
    }));
  };

  const { control, setValue, formState } = useRHF<z.infer<T>>({
    resolver: zodResolver(schema) as any,
    defaultValues: { [field]: "" } as any,
  });

  const fieldPath = field as any;

  const value = useWatch({
    control,
    name: fieldPath,
  }) as z.infer<T>[K];

  const handleSelect = (select: z.infer<T>[K]) => {
    setValue(
      fieldPath,
      select as unknown as PathValue<z.infer<T>, typeof fieldPath>,
      { shouldValidate: true }
    );
    setField(select);
  };

  return {
    value,
    control,
    formState,
    handleSelect,
    form,
    setValue,
  };
};
