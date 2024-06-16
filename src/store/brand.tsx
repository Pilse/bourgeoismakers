import { Brand } from "@/domain";
import { create } from "zustand";

export interface IBrandStore {
  brand: Brand;
  setBrand: (brand: Brand) => void;
  resetBrand: () => void;
}

export const useBrandStore = create<IBrandStore>((set) => ({
  brand: {
    name: "",
    description: "",
    feature: "",
  },
  setBrand: (brand: Brand) => set({ brand }),
  resetBrand: () =>
    set({
      brand: {
        name: "",
        description: "",
        feature: "",
      },
    }),
}));
