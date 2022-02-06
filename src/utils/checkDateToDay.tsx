export const checkDateToDay = (date:string):boolean => {
  const toDay = new Date().toLocaleDateString();
  return toDay === date.split(',')[0];
};
