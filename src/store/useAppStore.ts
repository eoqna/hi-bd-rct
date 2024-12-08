import { create } from "zustand";

interface ModalState {
  open: boolean;
  title: string;
  onClose?: () => void;
};

interface DataState {
  modal: ModalState;
  openModal: (data: ModalState) => void;
  isPlaying: boolean;
  setIsPlaying: (data: boolean) => void;
};

export const defaultModalState: ModalState = {
  open: false,
  title: "",
  onClose: () => {},
};

const useAppStore = create<DataState>()((set) => ({
  modal: defaultModalState,
  openModal: (data) => set({ modal: data }),
  isPlaying: false,
  setIsPlaying: (data) => set({ isPlaying: data }),
}));

export default useAppStore;