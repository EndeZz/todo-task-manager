export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }

  return [];
};

export const setLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
