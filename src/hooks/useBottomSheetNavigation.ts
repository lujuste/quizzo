import { modalBottomSheetAtom } from "@/screens/register/atoms/BottomSheet/BottomSheetAtom";
import {
  CredentialForm,
  type CredentialFormFields,
} from "@/screens/register/atoms/StepForm/stepFormAtom";
import type BottomSheet from "@gorhom/bottom-sheet";
import { useAtom } from "jotai";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Keyboard } from "react-native";

export const useBottomSheetNavigation = () => {
  const [modalState, setModalState] = useAtom(modalBottomSheetAtom);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [date, setDate] = useState(new Date());
  const dateRef = useRef<Date | null>(null);
  const [currentField, setCurrentField] = useAtom(CredentialForm);
  const snapPoints = useMemo(() => ["35%"], []);

  const handleChangeCurrentField = (field: CredentialFormFields) => {
    setCurrentField(field);
  };

  const onAction = {
    open: (field: CredentialFormFields) => {
      if (modalState.isReady && modalState.ref?.current) {
        Keyboard.dismiss();
        handleChangeCurrentField(field);
        modalState.ref.current.snapToIndex(1);
        setModalState((prev) => ({
          ...prev,
          isVisible: true,
        }));
      }
    },
  };

  const handleSheetChanges = useCallback((index: number) => {
    if (index <= 0) {
      setModalState((prev) => {
        return {
          ...prev,
          isVisible: false,
        };
      });
      modalState.ref?.current?.close();
    }
  }, []);

  const handleInitializeBottomSheet = () => {
    setModalState((prev) => ({
      ...prev,
      ref: bottomSheetRef,
      isReady: true,
    }));
  };

  useEffect(() => {
    if (bottomSheetRef.current) {
      handleInitializeBottomSheet();
    }
  }, [bottomSheetRef.current]);

  useEffect(() => {
    if (!modalState?.isVisible) {
      modalState?.ref?.current?.close();
    }
  }, [modalState?.isVisible]);

  return {
    date,
    dateRef,
    setDate,
    snapPoints,
    handleSheetChanges,
    bottomSheetRef,
    handleChangeCurrentField,
    currentField,
    onAction,
  };
};
