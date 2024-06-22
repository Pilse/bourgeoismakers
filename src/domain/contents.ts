export const getContentsLevel = (contentCount: number) => {
  if (contentCount < 5) {
    return 1;
  }

  if (contentCount < 10) {
    return 2;
  }

  return 3;
};

export const getContentsLevelName = (contentCount: number) => {
  if (contentCount < 5) {
    return "새싹";
  }

  if (contentCount < 10) {
    return "꽃";
  }
  return "열매";
};

export const getNextContentsLevelCondition = (contentCount: number) => {
  if (contentCount < 5) {
    return 5;
  }

  if (contentCount < 10) {
    return 10;
  }

  return null;
};
