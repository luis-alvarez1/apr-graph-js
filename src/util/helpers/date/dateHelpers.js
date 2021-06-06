export const addMonthToDate = (date, num) =>
  new Date(date.setMonth(date.getMonth() + num));
