export type BrandingPreference = {
  sns: string | null;
  item: string | null;
  vibe: { type: "INPUT" | "OPTION"; value: string } | null;
  strength: string[] | null;
};

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
