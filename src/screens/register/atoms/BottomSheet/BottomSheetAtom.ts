import type BottomSheet from "@gorhom/bottom-sheet";
import { atom } from "jotai";

type ModalBottomSheetState = {
  isVisible: boolean;
  ref: React.RefObject<BottomSheet> | null;
  isReady: boolean;
};

export const modalBottomSheetAtom = atom<ModalBottomSheetState>({
  isVisible: false,
  ref: null,
  isReady: false,
});
