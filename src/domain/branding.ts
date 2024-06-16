export type BrandingPreference = {
  sns: string | null;
  item: string | null;
  vibe: { type: "INPUT" | "OPTION"; value: string } | null;
  strength: string[] | null;
};

export type Brand = {
  name: string;
  description: string;
  feature: string;
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

export const toBrand = (): Brand => {
  return {
    name: "호호농장",
    description:
      "안녕하세요, 여러분! 😊오늘은 여러분께 건강하고 맛있는 간식, 고구마를 소개해드리려고 합니다. 저희는 신선한 고구마를 직접 재배하고 판매하고 있습니다.",
    feature:
      "안녕하세요, 여러분! 😊오늘은 여러분께 건강하고 맛있는 간식, 고구마를 소개해드리려고 합니다. 저희는 신선한 고구마를 직접 재배하고 판매하고 있습니다. 자연 그대로의 달콤함을 지닌 고구마는 누구나 좋아하는 인기 간식이죠! 지금 첫 주문하시는 고객님께는 10% 할인 혜택을 드립니다. 오늘은 여러분께 건강하고 맛있는 간식, 고구마를 소개해드리려고 합니다. 저희는 신선한 고구마를 직접 재배하고 판매하고 있습니다.  자연 그대로의 달콤함을 지닌 고구마는 누구나 좋아하는 인기 간식이죠! 지금 첫 주문하시는 고객님께는 10% 할인 혜택을 드립니다.",
  };
};
