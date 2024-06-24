import { BrandingPreference, CHAT_PRESET_TYPE } from "@/domain";
import { create } from "zustand";

export interface IForceRerenderStore {
  flag: boolean;
  rerender: () => void;
}

export const useForceRerenderStore = create<IForceRerenderStore>((set, get) => ({
  flag: false,
  rerender: () => set({ flag: !get().flag }),
}));
