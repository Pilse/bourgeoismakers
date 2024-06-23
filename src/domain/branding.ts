export type BrandingPreference = {
  sns: string | null;
  item: string | null;
  vibe: { type: "INPUT" | "OPTION"; value: string } | null;
  strength: string[] | null;
};

export type BrandingPreferenceDTO = {
  snsType: string;
  products: string;
  mood: string;
  strength: string[];
};

export type Brand = {
  name: string;
  description: string;
  feature: string;
};

export type BrandDTO = {
  name: string;
  summary: string;
  description: string;
};

export type Farm = BrandDTO & BrandingPreferenceDTO & { id: string };

export type FarmDTO = BrandDTO & BrandingPreferenceDTO & { farm_id: string };

export const isPreferenceValid = (preference: BrandingPreference) => {
  if (
    !(
      preference.sns &&
      preference.item &&
      preference.vibe &&
      preference.strength &&
      preference.strength.length > 0
    )
  ) {
    return false;
  }

  if (!preference.item.trim()) {
    return false;
  }

  if (preference.vibe.type === "INPUT" && !preference.vibe.value.trim()) {
    return false;
  }

  return true;
};

export const toBrand = (brand: BrandDTO): Brand => {
  return {
    name: brand.name,
    description: brand.summary,
    feature: brand.description,
  };
};

export const toBrandPreferenceDTO = (preference: BrandingPreference): BrandingPreferenceDTO => {
  return {
    snsType: tosnsKR(preference.sns ?? ""),
    products: preference.item ?? "",
    mood: toVibeKR(preference.vibe?.value ?? ""),
    strength: toStrengthKR(preference.strength ?? []),
  };
};

export const tosnsKR = (sns: BrandingPreferenceDTO["snsType"]) => {
  return sns === "instagram" ? "인스타그램" : "네이버 밴드";
};

export const toVibeKR = (vibe: BrandingPreferenceDTO["mood"]) => {
  return vibe === "bubbly" ? "통통 튄다" : "professional" ? "전문적이다" : "approachable" ? "친근하다" : "";
};

export const toStrengthKR = (strength: BrandingPreferenceDTO["strength"]) => {
  return strength.map((s) => {
    return s === "environmentally friendly"
      ? "친환경 농법"
      : s === "organic"
      ? "유기농"
      : s === "sweetness"
      ? "뛰어난 당도"
      : s === "fertilizer"
      ? "좋은 비료 사용"
      : s === "shipping"
      ? "빠른 배송"
      : s;
  });
};

export const toBrandDTO = (brand: Brand): BrandDTO => {
  return {
    name: brand.name,
    summary: brand.description,
    description: brand.feature,
  };
};

export const toFarm = (brand: Brand, preference: BrandingPreference, id?: string): Farm => {
  return {
    ...toBrandDTO(brand),
    ...toBrandPreferenceDTO(preference),
    id: id ?? "",
  };
};
