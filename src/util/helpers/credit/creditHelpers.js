export const getFeeValue = (creditValue, feesNumber) =>
  creditValue / feesNumber;

export const isExpired = (credit) =>
  Date.now() > credit.nextFeeExpiration;
