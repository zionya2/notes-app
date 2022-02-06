type ReturnObjType = {
  day: string;
  month: string;
  year: string,
  time: string,
};

export const transformDate = (fullDate:string | undefined):ReturnObjType => {
  const obj = {
    day: '',
    month: '',
    year: '',
    time: '',
  };
  if (fullDate === undefined || !fullDate) {
    return obj;
  }
  const [date, time] = fullDate.split(',');
  const dateParts = date.split('.');
  [obj.day, obj.month, obj.year] = dateParts;
  obj.time = time.split(':').splice(0, 2).join(':');
  return obj;
};
