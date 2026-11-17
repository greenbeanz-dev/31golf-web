const IMAGE_URL_PATTERN = /^https?:\/\/\S+$/;

export const isImagePath = (value: string): boolean => {
  const trimmed = value.trim();
  if (!trimmed || /[\r\n]/.test(trimmed)) {
    return false;
  }

  return IMAGE_URL_PATTERN.test(trimmed);
};
