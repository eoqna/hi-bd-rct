import { create } from "zustand";

interface ModalState {
  open: boolean;
  title: string;
  onClose?: () => void;
};

interface DataState {
  modal: ModalState;
  openModal: (data: ModalState) => void;
};

export const defaultModalState: ModalState = {
  open: false,
  title: "",
  onClose: () => {},
};

const useAppStore = create<DataState>()((set) => ({
  modal: defaultModalState,
  openModal: (data) => set({ modal: data }),
}));

export default useAppStore;