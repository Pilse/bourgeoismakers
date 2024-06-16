import { BrandingPreference } from "@/domain";
import { create } from "zustand";

export interface IBrandingPreferenceStore {
  preference: BrandingPreference;
  setPreference: (preference: BrandingPreference) => void;
  resetPreference: () => void;
}

export const useBrandingPreferenceStore = create<IBrandingPreferenceStore>((set) => ({
  preference: {
    sns: null,
    item: null,
    vibe: null,
    strength: null,
  },
  setPreference: (preference: BrandingPreference) => set({ preference }),
  resetPreference: () =>
    set({
      preference: {
        sns: null,
        item: null,
        vibe: null,
        strength: null,
      },
    }),
}));
